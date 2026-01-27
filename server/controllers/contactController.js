// controllers/contactController.js
import Contact from "../models/Contact.js";
import connectDB from "../config/db.js";
// import sendAutoReply from "../utils/sendEmail.js"; // enable later

export const createContact = async (req, res) => {
  try {
    await connectDB();

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await Contact.create({ name, email, message, type: 'contact' });

    try {
      await sendAutoReply({ name, email, message });
    } catch (emailError) {
      console.error("Email failed:", emailError);
    }

    return res.status(201).json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error("CREATE CONTACT ERROR:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
