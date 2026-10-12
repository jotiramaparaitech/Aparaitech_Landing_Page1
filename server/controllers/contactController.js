// server/controllers/contactController.js
import Contact from "../models/Contact.js";
import connectDB from "../config/db.js";
import sendAutoReply from "../utils/sendEmail.js";

export const createContact = async (req, res) => {
  try {
    await connectDB();

    const { name, email, phone, company, subject, message, priority } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required fields.",
      });
    }

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    const newContact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : "",
      company: company ? company.trim() : "",
      subject: subject ? subject.trim() : "General Inquiry",
      priority: priority || "Normal",
      message: message.trim(),
      type: "contact",
      status: "New",
    });

    // Send auto-reply non-blockingly
    try {
      await sendAutoReply({ name, email, message });
    } catch (emailError) {
      console.warn("[Email Notification] Auto-reply email could not be sent:", emailError.message);
    }

    return res.status(201).json({
      success: true,
      message: "Thank you for reaching out! Your inquiry has been recorded and our team will contact you shortly.",
      data: {
        id: newContact._id,
        createdAt: newContact.createdAt,
      },
    });
  } catch (error) {
    console.error("[Create Contact Error]:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to submit inquiry to permanent storage. Please try again.",
    });
  }
};

export const getContacts = async (req, res) => {
  try {
    await connectDB();
    const { status, search, page = 1, limit = 50 } = req.query;

    const query = {};
    if (status && status !== "All") {
      query.status = status;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { company: { $regex: search, $options: "i" } },
        { subject: { $regex: search, $options: "i" } },
      ];
    }

    const skip = (Number(page) - 1) * Number(limit);
    const [contacts, total] = await Promise.all([
      Contact.find(query).sort({ createdAt: -1 }).skip(skip).limit(Number(limit)),
      Contact.countDocuments(query),
    ]);

    res.json({
      success: true,
      data: contacts,
      total,
      page: Number(page),
      pages: Math.ceil(total / Number(limit)),
    });
  } catch (error) {
    console.error("[Get Contacts Error]:", error);
    res.status(500).json({ success: false, message: "Failed to retrieve contacts." });
  }
};

export const updateContactStatus = async (req, res) => {
  try {
    await connectDB();
    const { id } = req.params;
    const { status } = req.body;

    const updated = await Contact.findByIdAndUpdate(id, { status }, { new: true });
    if (!updated) {
      return res.status(404).json({ success: false, message: "Contact record not found." });
    }

    res.json({ success: true, message: "Status updated successfully.", data: updated });
  } catch (error) {
    console.error("[Update Contact Status Error]:", error);
    res.status(500).json({ success: false, message: "Failed to update contact status." });
  }
};

export const deleteContact = async (req, res) => {
  try {
    await connectDB();
    const { id } = req.params;
    await Contact.findByIdAndDelete(id);
    res.json({ success: true, message: "Contact inquiry deleted successfully." });
  } catch (error) {
    console.error("[Delete Contact Error]:", error);
    res.status(500).json({ success: false, message: "Failed to delete contact inquiry." });
  }
};
