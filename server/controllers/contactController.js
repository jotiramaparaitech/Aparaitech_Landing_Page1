import Contact from "../models/Contact.js";
import sendAutoReply from "../utils/sendEmail.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await Contact.create({ name, email, message });

    // await sendAutoReply({ name, email, message });

    res.status(201).json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};