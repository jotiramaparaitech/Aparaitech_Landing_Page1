// server/controllers/adminController.js
import Contact from "../models/Contact.js";
import JobApplication from "../models/JobApplication.js";
import Appointment from "../models/Appointment.js";
import ContactSupport from "../models/ContactSupport.js";
import Partner from "../models/Partner.js";
import Subscriber from "../models/Subscriber.js";
import connectDB from "../config/db.js";

export const getAdminStats = async (req, res) => {
  try {
    await connectDB();

    const [
      totalContacts,
      newContacts,
      totalJobs,
      newJobs,
      totalAppointments,
      newAppointments,
      totalTickets,
      openTickets,
      totalPartners,
      totalSubscribers,
      recentContacts,
      recentJobs,
      recentAppointments,
    ] = await Promise.all([
      Contact.countDocuments(),
      Contact.countDocuments({ status: "New" }),
      JobApplication.countDocuments(),
      JobApplication.countDocuments({ status: "Submitted" }),
      Appointment.countDocuments(),
      Appointment.countDocuments({ status: "New Inquiry" }),
      ContactSupport.countDocuments(),
      ContactSupport.countDocuments({ status: "Open" }),
      Partner.countDocuments(),
      Subscriber.countDocuments({ status: "Subscribed" }),
      Contact.find().sort({ createdAt: -1 }).limit(5).select("name email subject status createdAt"),
      JobApplication.find().sort({ createdAt: -1 }).limit(5).select("fullName email appliedPosition status createdAt"),
      Appointment.find().sort({ createdAt: -1 }).limit(5).select("bookingId name email type status visitDate createdAt"),
    ]);

    res.json({
      success: true,
      stats: {
        contacts: { total: totalContacts, pending: newContacts },
        jobs: { total: totalJobs, pending: newJobs },
        appointments: { total: totalAppointments, pending: newAppointments },
        tickets: { total: totalTickets, pending: openTickets },
        partners: { total: totalPartners },
        subscribers: { total: totalSubscribers },
      },
      recent: {
        contacts: recentContacts,
        jobs: recentJobs,
        appointments: recentAppointments,
      },
    });
  } catch (error) {
    console.error("[Get Admin Stats Error]:", error);
    res.status(500).json({ success: false, message: "Failed to calculate admin stats." });
  }
};

export const exportCSV = async (req, res) => {
  try {
    await connectDB();
    const { collection } = req.params;

    let csvContent = "";
    let filename = `aparaitech_${collection}_${new Date().toISOString().slice(0, 10)}.csv`;

    switch (collection) {
      case "contacts": {
        const records = await Contact.find().sort({ createdAt: -1 });
        const headers = ["ID", "Date", "Name", "Email", "Phone", "Company", "Subject", "Priority", "Status", "Message"];
        const rows = records.map((r) => [
          r._id,
          r.createdAt ? r.createdAt.toISOString() : "",
          `"${(r.name || "").replace(/"/g, '""')}"`,
          `"${(r.email || "").replace(/"/g, '""')}"`,
          `"${(r.phone || "").replace(/"/g, '""')}"`,
          `"${(r.company || "").replace(/"/g, '""')}"`,
          `"${(r.subject || "").replace(/"/g, '""')}"`,
          r.priority,
          r.status,
          `"${(r.message || "").replace(/"/g, '""')}"`,
        ]);
        csvContent = [headers.join(","), ...rows.map((row) => row.join(","))].join("\n");
        break;
      }

      case "jobs": {
        const records = await JobApplication.find().sort({ createdAt: -1 });
        const headers = ["ID", "Date", "Candidate Name", "Email", "Phone", "Applied Position", "LinkedIn", "GitHub", "Portfolio", "Status", "Resume URL"];
        const rows = records.map((r) => [
          r._id,
          r.createdAt ? r.createdAt.toISOString() : "",
          `"${(r.fullName || "").replace(/"/g, '""')}"`,
          `"${(r.email || "").replace(/"/g, '""')}"`,
          `"${(r.phone || "").replace(/"/g, '""')}"`,
          `"${(r.appliedPosition || "").replace(/"/g, '""')}"`,
          `"${(r.linkedin || "").replace(/"/g, '""')}"`,
          `"${(r.github || "").replace(/"/g, '""')}"`,
          `"${(r.portfolio || "").replace(/"/g, '""')}"`,
          r.status,
          `"${(r.resumeUrl || "").replace(/"/g, '""')}"`,
        ]);
        csvContent = [headers.join(","), ...rows.map((row) => row.join(","))].join("\n");
        break;
      }

      case "appointments": {
        const records = await Appointment.find().sort({ createdAt: -1 });
        const headers = ["Booking ID", "Date Created", "Type", "Name", "Email", "Phone", "Company", "Service", "Visit Date", "Slot", "Status", "Notes"];
        const rows = records.map((r) => [
          r.bookingId,
          r.createdAt ? r.createdAt.toISOString() : "",
          r.type,
          `"${(r.name || "").replace(/"/g, '""')}"`,
          `"${(r.email || "").replace(/"/g, '""')}"`,
          `"${(r.phone || "").replace(/"/g, '""')}"`,
          `"${(r.company || "").replace(/"/g, '""')}"`,
          `"${(r.service || "").replace(/"/g, '""')}"`,
          r.visitDate || "",
          `${r.slotDay || ""} ${r.slotTime || ""}`.trim(),
          r.status,
          `"${(r.message || "").replace(/"/g, '""')}"`,
        ]);
        csvContent = [headers.join(","), ...rows.map((row) => row.join(","))].join("\n");
        break;
      }

      case "tickets": {
        const records = await ContactSupport.find().sort({ createdAt: -1 });
        const headers = ["Ticket ID", "Created At", "Name", "Email", "Subject", "Priority", "Status", "Message"];
        const rows = records.map((r) => [
          r.ticketId,
          r.createdAt ? r.createdAt.toISOString() : "",
          `"${(r.name || "").replace(/"/g, '""')}"`,
          `"${(r.email || "").replace(/"/g, '""')}"`,
          `"${(r.subject || "").replace(/"/g, '""')}"`,
          r.priority,
          r.status,
          `"${(r.message || "").replace(/"/g, '""')}"`,
        ]);
        csvContent = [headers.join(","), ...rows.map((row) => row.join(","))].join("\n");
        break;
      }

      case "partners": {
        const records = await Partner.find().sort({ createdAt: -1 });
        const headers = ["ID", "Date", "Company Name", "Contact Person", "Email", "Phone", "Type", "Status", "Message"];
        const rows = records.map((r) => [
          r._id,
          r.createdAt ? r.createdAt.toISOString() : "",
          `"${(r.companyName || "").replace(/"/g, '""')}"`,
          `"${(r.name || "").replace(/"/g, '""')}"`,
          `"${(r.email || "").replace(/"/g, '""')}"`,
          `"${(r.phone || "").replace(/"/g, '""')}"`,
          r.partnershipType,
          r.status,
          `"${(r.message || "").replace(/"/g, '""')}"`,
        ]);
        csvContent = [headers.join(","), ...rows.map((row) => row.join(","))].join("\n");
        break;
      }

      case "subscribers": {
        const records = await Subscriber.find().sort({ createdAt: -1 });
        const headers = ["ID", "Subscribed Date", "Email", "Status"];
        const rows = records.map((r) => [
          r._id,
          r.createdAt ? r.createdAt.toISOString() : "",
          `"${(r.email || "").replace(/"/g, '""')}"`,
          r.status,
        ]);
        csvContent = [headers.join(","), ...rows.map((row) => row.join(","))].join("\n");
        break;
      }

      default:
        return res.status(400).json({ success: false, message: "Invalid collection for export." });
    }

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    return res.status(200).send(csvContent);
  } catch (error) {
    console.error("[Export CSV Error]:", error);
    res.status(500).json({ success: false, message: "Export failed." });
  }
};
