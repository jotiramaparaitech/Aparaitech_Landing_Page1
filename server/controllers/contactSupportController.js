import ContactSupport from "../models/ContactSupport.js";
import sendAutoReply from "../utils/sendEmail.js";

export const createSupportTicket = async (req, res) => {
  try {
    const { name, email, subject, priority, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false,
        message: "Name, email, subject, and message are required" 
      });
    }

    // Generate unique ticket ID
    const count = await ContactSupport.countDocuments();
    const ticketId = `TKT-${String(count + 1).padStart(4, '0')}`;

    const supportTicket = await ContactSupport.create({ 
      name, 
      email, 
      subject, 
      priority: priority || 'Normal', 
      message,
      ticketId
    });

    // Send auto-reply for support ticket (non-blocking)
    try {
      await sendAutoReply({ name, email, subject, message, ticketId, isSupport: true });
    } catch (emailError) {
      console.warn('Email sending failed:', emailError.message);
      // Continue with ticket creation even if email fails
    }

    res.status(201).json({
      success: true,
      message: "Support ticket submitted successfully",
      data: {
        ticketId: supportTicket.ticketId,
        id: supportTicket._id,
        priority: supportTicket.priority,
        status: supportTicket.status,
        createdAt: supportTicket.createdAt
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false,
      message: "Server error" 
    });
  }
};

export const getSupportTickets = async (req, res) => {
  try {
    const { status, priority } = req.query;
    const filter = {};
    
    if (status) filter.status = status;
    if (priority) filter.priority = priority;
    
    const supportTickets = await ContactSupport.find(filter).sort({ createdAt: -1 });
    
    res.json({
      success: true,
      count: supportTickets.length,
      data: supportTickets,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false,
      message: "Server error" 
    });
  }
};

export const updateTicketStatus = async (req, res) => {
  try {
    const { ticketId } = req.params;
    const { status } = req.body;

    if (!['Open', 'In Progress', 'Resolved', 'Closed'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status"
      });
    }

    const ticket = await ContactSupport.findOneAndUpdate(
      { ticketId },
      { status },
      { new: true }
    );

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found"
      });
    }

    res.json({
      success: true,
      message: "Ticket status updated successfully",
      data: ticket
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false,
      message: "Server error" 
    });
  }
};
