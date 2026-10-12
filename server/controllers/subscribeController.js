// server/controllers/subscribeController.js
import Subscriber from "../models/Subscriber.js";
import connectDB from "../config/db.js";

export const subscriberUser = async (req, res) => {
  try {
    await connectDB();
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required." });
    }

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: "Please enter a valid email address." });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const existing = await Subscriber.findOne({ email: normalizedEmail });

    if (existing) {
      if (existing.status === "Unsubscribed") {
        existing.status = "Subscribed";
        await existing.save();
        return res.status(200).json({
          success: true,
          message: "Welcome back! Your subscription has been reactivated.",
        });
      }
      return res.status(200).json({
        success: true,
        message: "You are already subscribed to the APARAITECH engineering newsletter.",
      });
    }

    await Subscriber.create({ email: normalizedEmail, status: "Subscribed" });

    return res.status(201).json({
      success: true,
      message: "Subscribed successfully! Thank you for joining APARAITECH updates.",
    });
  } catch (error) {
    console.error("[Subscribe Error]:", error);
    return res.status(500).json({ success: false, message: "Subscription failed. Please try again." });
  }
};

export const getSubscribers = async (req, res) => {
  try {
    await connectDB();
    const { search, page = 1, limit = 50 } = req.query;

    const query = {};
    if (search) {
      query.email = { $regex: search, $options: "i" };
    }

    const skip = (Number(page) - 1) * Number(limit);
    const [subscribers, total] = await Promise.all([
      Subscriber.find(query).sort({ createdAt: -1 }).skip(skip).limit(Number(limit)),
      Subscriber.countDocuments(query),
    ]);

    res.json({
      success: true,
      data: subscribers,
      total,
      page: Number(page),
      pages: Math.ceil(total / Number(limit)),
    });
  } catch (error) {
    console.error("[Get Subscribers Error]:", error);
    res.status(500).json({ success: false, message: "Failed to retrieve subscribers." });
  }
};

export const deleteSubscriber = async (req, res) => {
  try {
    await connectDB();
    const { id } = req.params;
    await Subscriber.findByIdAndDelete(id);
    res.json({ success: true, message: "Subscriber removed successfully." });
  } catch (error) {
    console.error("[Delete Subscriber Error]:", error);
    res.status(500).json({ success: false, message: "Failed to delete subscriber." });
  }
};
