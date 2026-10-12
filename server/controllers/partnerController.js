// server/controllers/partnerController.js
import Partner from "../models/Partner.js";
import connectDB from "../config/db.js";

export const createPartner = async (req, res) => {
  try {
    await connectDB();
    const { companyName, name, email, phone, partnershipType, message } = req.body;

    if (!companyName || !name || !email) {
      return res.status(400).json({
        success: false,
        message: "Company name, contact name, and business email are required.",
      });
    }

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: "Please provide a valid business email." });
    }

    const partner = await Partner.create({
      companyName: companyName.trim(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : "",
      partnershipType: partnershipType || "Technology Partner",
      message: message ? message.trim() : "",
      status: "Pending",
    });

    res.status(201).json({
      success: true,
      message: "Thank you for partnering with APARAITECH! Our alliances team will review your proposal.",
      data: { id: partner._id, createdAt: partner.createdAt },
    });
  } catch (error) {
    console.error("[Create Partner Error]:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to process partner application.",
    });
  }
};

export const getPartners = async (req, res) => {
  try {
    await connectDB();
    const { status, search, page = 1, limit = 50 } = req.query;

    const query = {};
    if (status && status !== "All") query.status = status;
    if (search) {
      query.$or = [
        { companyName: { $regex: search, $options: "i" } },
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ];
    }

    const skip = (Number(page) - 1) * Number(limit);
    const [partners, total] = await Promise.all([
      Partner.find(query).sort({ createdAt: -1 }).skip(skip).limit(Number(limit)),
      Partner.countDocuments(query),
    ]);

    res.json({
      success: true,
      data: partners,
      total,
      page: Number(page),
      pages: Math.ceil(total / Number(limit)),
    });
  } catch (error) {
    console.error("[Get Partners Error]:", error);
    res.status(500).json({ success: false, message: "Failed to retrieve partner applications." });
  }
};

export const updatePartnerStatus = async (req, res) => {
  try {
    await connectDB();
    const { id } = req.params;
    const { status } = req.body;

    const updated = await Partner.findByIdAndUpdate(id, { status }, { new: true });
    if (!updated) {
      return res.status(404).json({ success: false, message: "Partner application not found." });
    }

    res.json({ success: true, message: "Partner status updated.", data: updated });
  } catch (error) {
    console.error("[Update Partner Status Error]:", error);
    res.status(500).json({ success: false, message: "Failed to update partner status." });
  }
};

export const deletePartner = async (req, res) => {
  try {
    await connectDB();
    const { id } = req.params;
    await Partner.findByIdAndDelete(id);
    res.json({ success: true, message: "Partner application deleted." });
  } catch (error) {
    console.error("[Delete Partner Error]:", error);
    res.status(500).json({ success: false, message: "Failed to delete partner record." });
  }
};
