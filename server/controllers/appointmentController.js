// server/controllers/appointmentController.js
import Appointment from "../models/Appointment.js";
import connectDB from "../config/db.js";
import axios from "axios";

const GOOGLE_SHEET_WEBHOOK = "https://script.google.com/macros/s/AKfycbyrAwjfw8P5zizxmoS5OXyxLdbdtro60KomQlmu9lfHYueZIZHh4f9Omi5T4ThAu2BK/exec";

export const createAppointment = async (req, res) => {
  try {
    await connectDB();

    const {
      name,
      candidateName,
      email,
      phone,
      company,
      service,
      type,
      visitDate,
      slotDay,
      slotTime,
      college,
      degree,
      passingYear,
      resumeUrl,
      message,
      notes,
      nda,
      source,
    } = req.body;

    const clientName = (name || candidateName || "").trim();
    if (!clientName) {
      return res.status(400).json({ success: false, message: "Name is required." });
    }
    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required." });
    }
    if (!phone) {
      return res.status(400).json({ success: false, message: "Phone number is required." });
    }

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: "Please provide a valid email address." });
    }

    // Generate unique booking ID
    const prefix = type === "Office Visited" ? "STU" : "INQ";
    const bookingId = `${prefix}-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

    const newAppointment = await Appointment.create({
      bookingId,
      type: type || "Executive Consultation",
      name: clientName,
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      company: company || "",
      service: service || "Enterprise AI Diagnostic",
      visitDate: visitDate || "",
      slotDay: slotDay || "",
      slotTime: slotTime || "",
      college: college || "",
      degree: degree || "",
      passingYear: passingYear || "",
      resumeUrl: resumeUrl || "",
      message: message || notes || "",
      notes: notes || "",
      nda: nda ? "Yes" : "No",
      source: source || "Website Consultation Modal",
      status: "New Inquiry",
      googleSheetSynced: false,
    });

    // Secondary sync: Attempt Google Sheet dispatch non-blockingly
    try {
      if (GOOGLE_SHEET_WEBHOOK) {
        axios.post(GOOGLE_SHEET_WEBHOOK, {
          id: bookingId,
          timestamp: new Date().toISOString(),
          type: newAppointment.type,
          name: clientName,
          email: newAppointment.email,
          phone: newAppointment.phone,
          company: newAppointment.company,
          service: newAppointment.service,
          visitDate: newAppointment.visitDate,
          slotDay: newAppointment.slotDay,
          slotTime: newAppointment.slotTime,
          message: newAppointment.message,
          nda: newAppointment.nda,
          source: newAppointment.source,
          status: newAppointment.status,
        }, { timeout: 4000 })
        .then(() => {
          Appointment.findByIdAndUpdate(newAppointment._id, { googleSheetSynced: true }).catch(() => {});
        })
        .catch(() => {});
      }
    } catch (sheetErr) {
      console.warn("[Google Sheet Sync Warn]:", sheetErr.message);
    }

    return res.status(201).json({
      success: true,
      message: "Appointment booking confirmed and recorded securely in database.",
      data: {
        bookingId: newAppointment.bookingId,
        id: newAppointment._id,
        createdAt: newAppointment.createdAt,
      },
    });
  } catch (error) {
    console.error("[Create Appointment Error]:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to record appointment in database. Please try again.",
    });
  }
};

export const getAppointments = async (req, res) => {
  try {
    await connectDB();
    const { status, type, search, page = 1, limit = 50 } = req.query;

    const query = {};
    if (status && status !== "All") query.status = status;
    if (type && type !== "All") query.type = type;
    if (search) {
      query.$or = [
        { bookingId: { $regex: search, $options: "i" } },
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
        { company: { $regex: search, $options: "i" } },
      ];
    }

    const skip = (Number(page) - 1) * Number(limit);
    const [appointments, total] = await Promise.all([
      Appointment.find(query).sort({ createdAt: -1 }).skip(skip).limit(Number(limit)),
      Appointment.countDocuments(query),
    ]);

    res.json({
      success: true,
      data: appointments,
      total,
      page: Number(page),
      pages: Math.ceil(total / Number(limit)),
    });
  } catch (error) {
    console.error("[Get Appointments Error]:", error);
    res.status(500).json({ success: false, message: "Failed to retrieve appointments." });
  }
};

export const updateAppointmentStatus = async (req, res) => {
  try {
    await connectDB();
    const { id } = req.params;
    const { status } = req.body;

    const updated = await Appointment.findByIdAndUpdate(id, { status }, { new: true });
    if (!updated) {
      return res.status(404).json({ success: false, message: "Appointment not found." });
    }

    res.json({ success: true, message: "Appointment status updated.", data: updated });
  } catch (error) {
    console.error("[Update Appointment Status Error]:", error);
    res.status(500).json({ success: false, message: "Failed to update appointment status." });
  }
};

export const deleteAppointment = async (req, res) => {
  try {
    await connectDB();
    const { id } = req.params;
    await Appointment.findByIdAndDelete(id);
    res.json({ success: true, message: "Appointment deleted successfully." });
  } catch (error) {
    console.error("[Delete Appointment Error]:", error);
    res.status(500).json({ success: false, message: "Failed to delete appointment." });
  }
};
