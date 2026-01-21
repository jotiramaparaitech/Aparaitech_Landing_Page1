import Contact from "../models/Contact.js";
import sendAutoReply from "../utils/sendEmail.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // ✅ 1) Save message first
    await Contact.create({ name, email, message });

    // ✅ 2) Try sending email
    try {
      await sendAutoReply({ name, email, message });
    } catch (mailError) {
      console.log("EMAIL ERROR:", mailError);

      // ✅ Message saved, but mail failed
      return res.status(500).json({
        success: false,
        message: "Message saved but email failed",
        emailError: mailError.message,
      });
    }

    return res.status(201).json({
      success: true,
      message: "Form submitted + Email sent ✅",
    });

  } catch (error) {
    console.error("CREATE CONTACT ERROR:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
      errorName: error.name,
    });
  }
};
