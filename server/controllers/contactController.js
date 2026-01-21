import Contact from "../models/Contact.js";
import sendAutoReply from "../utils/sendEmail.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await Contact.create({ name, email, message, type: 'contact' });

    await sendAutoReply({ name, email, message });

    res.status(201).json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error("CREATE CONTACT ERROR:", error);
    return res.status(500).json({
      message: error.message,
      errorName: error.name,
    });
  }
};

export const createSupportTicket = async (req, res) => {
  try {
    const { name, email, subject, priority, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false,
        message: "Name, email, subject, and message are required" 
      });
    }

    const supportTicket = await Contact.create({ 
      name, 
      email, 
      subject, 
      priority: priority || 'Normal', 
      message, 
      type: 'support' 
    });

    // Send auto-reply for support ticket (non-blocking)
    try {
      await sendAutoReply({ name, email, subject, message, isSupport: true });
    } catch (emailError) {
      console.warn('Email sending failed:', emailError.message);
      // Continue with ticket creation even if email fails
    }

    res.status(201).json({
      success: true,
      message: "Support ticket submitted successfully",
      data: {
        id: supportTicket._id,
        priority: supportTicket.priority,
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

export const getContacts = async (req, res) => {
  try {
    const { type } = req.query;
    const filter = type ? { type } : {};
    
    const contacts = await Contact.find(filter).sort({ createdAt: -1 });
    
    res.json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false,
      message: "Server error" 
    });
  }
};