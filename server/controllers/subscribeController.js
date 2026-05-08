import Subscriber from "../models/Subscriber.js";

export const subscriberUser = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const existingUser = await Subscriber.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "You are already subscribed" });
    }

    await Subscriber.create({ email });

    return res.status(201).json({ message: "Subscribed successfully" });

  } catch (error) {
    console.error("Subscribe error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
