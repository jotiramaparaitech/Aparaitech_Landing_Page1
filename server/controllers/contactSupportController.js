// server/controllers/contactSupportController.js
import ContactSupport from "../models/ContactSupport.js";
import connectDB from "../config/db.js";
import sendAutoReply from "../utils/sendEmail.js";

export const createSupportTicket = async (req, res) => {
  try {
    await connectDB();
    const { name, email, subject, priority, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, subject, and issue description are required.",
      });
    }

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: "Please provide a valid email address." });
    }

    // Generate unique ticket ID
    const count = await ContactSupport.countDocuments();
    const ticketId = `TKT-${String(count + 101).padStart(5, "0")}`;

    const supportTicket = await ContactSupport.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      priority: priority || "Normal",
      message: message.trim(),
      status: "Open",
      ticketId,
    });

    try {
      await sendAutoReply({ name, email, subject, message, ticketId, isSupport: true });
    } catch (emailError) {
      console.warn("[Support Ticket] Notification email failed:", emailError.message);
    }

    res.status(201).json({
      success: true,
      message: `Support ticket #${ticketId} created successfully. Our Tier-2 engineers are on it.`,
      data: {
        ticketId: supportTicket.ticketId,
        id: supportTicket._id,
        priority: supportTicket.priority,
        status: supportTicket.status,
        createdAt: supportTicket.createdAt,
      },
    });
  } catch (error) {
    console.error("[Create Support Ticket Error]:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to create support ticket.",
    });
  }
};

export const getSupportTicketStatus = async (req, res) => {
  try {
    await connectDB();
    const { ticketId } = req.params;
    const { email } = req.query;

    const query = { ticketId: ticketId.trim() };
    if (email) {
      query.email = email.trim().toLowerCase();
    }

    const ticket = await ContactSupport.findOne(query).select("-__v");
    if (!ticket) {
      return res.status(404).json({ success: false, message: "Ticket not found or credentials mismatched." });
    }

    res.json({ success: true, data: ticket });
  } catch (error) {
    console.error("[Get Support Ticket Status Error]:", error);
    res.status(500).json({ success: false, message: "Failed to look up ticket status." });
  }
};

export const getSupportTickets = async (req, res) => {
  try {
    await connectDB();
    const { status, priority, search, page = 1, limit = 50 } = req.query;
    const filter = {};

    if (status && status !== "All") filter.status = status;
    if (priority && priority !== "All") filter.priority = priority;
    if (search) {
      filter.$or = [
        { ticketId: { $regex: search, $options: "i" } },
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { subject: { $regex: search, $options: "i" } },
      ];
    }

    const skip = (Number(page) - 1) * Number(limit);
    const [tickets, total] = await Promise.all([
      ContactSupport.find(filter).sort({ createdAt: -1 }).skip(skip).limit(Number(limit)),
      ContactSupport.countDocuments(filter),
    ]);

    res.json({
      success: true,
      data: tickets,
      total,
      page: Number(page),
      pages: Math.ceil(total / Number(limit)),
    });
  } catch (error) {
    console.error("[Get Support Tickets Error]:", error);
    res.status(500).json({ success: false, message: "Failed to retrieve support tickets." });
  }
};

export const updateTicketStatus = async (req, res) => {
  try {
    await connectDB();
    const { ticketId } = req.params;
    const { status, priority } = req.body;

    const updateFields = {};
    if (status) {
      if (!["Open", "In Progress", "Resolved", "Closed"].includes(status)) {
        return res.status(400).json({ success: false, message: "Invalid status value." });
      }
      updateFields.status = status;
    }
    if (priority) {
      updateFields.priority = priority;
    }

    const ticket = await ContactSupport.findOneAndUpdate(
      { ticketId },
      updateFields,
      { new: true }
    );

    if (!ticket) {
      return res.status(404).json({ success: false, message: "Ticket not found." });
    }

    res.json({ success: true, message: "Ticket updated successfully.", data: ticket });
  } catch (error) {
    console.error("[Update Ticket Status Error]:", error);
    res.status(500).json({ success: false, message: "Failed to update ticket." });
  }
};

export const deleteTicket = async (req, res) => {
  try {
    await connectDB();
    const { ticketId } = req.params;
    await ContactSupport.findOneAndDelete({ ticketId });
    res.json({ success: true, message: "Support ticket deleted." });
  } catch (error) {
    console.error("[Delete Ticket Error]:", error);
    res.status(500).json({ success: false, message: "Failed to delete ticket." });
  }
};
