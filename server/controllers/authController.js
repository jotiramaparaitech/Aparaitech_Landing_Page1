// server/controllers/authController.js
import AdminUser from "../models/AdminUser.js";
import connectDB from "../config/db.js";
import bcrypt from "bcryptjs";
import { signToken } from "../middleware/auth.js";

export const loginAdmin = async (req, res) => {
  try {
    await connectDB();
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide both username/email and password.",
      });
    }

    const cleanUsername = username.trim().toLowerCase();
    const admin = await AdminUser.findOne({
      $or: [{ username: cleanUsername }, { email: cleanUsername }],
    });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials.",
      });
    }

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials.",
      });
    }

    admin.lastLogin = new Date();
    await admin.save();

    const token = signToken(admin._id, admin.role);

    res.json({
      success: true,
      message: "Admin authentication successful.",
      token,
      user: {
        id: admin._id,
        name: admin.name,
        username: admin.username,
        email: admin.email,
        role: admin.role,
        lastLogin: admin.lastLogin,
      },
    });
  } catch (error) {
    console.error("[Login Error]:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Authentication service failed.",
    });
  }
};

export const getMe = async (req, res) => {
  try {
    res.json({
      success: true,
      user: req.admin,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Could not retrieve session details." });
  }
};

export const setupInitialAdmin = async (req, res) => {
  try {
    await connectDB();
    const existing = await AdminUser.countDocuments();

    if (existing > 0) {
      return res.status(400).json({
        success: false,
        message: "Admin account is already configured. Please log in directly.",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("Admin@Aparaitech2026", salt);

    const initialAdmin = await AdminUser.create({
      name: "APARAITECH Senior Architect",
      email: "hr@info.aparaitech.org",
      username: "admin",
      password: hashedPassword,
      role: "superadmin",
    });

    res.status(201).json({
      success: true,
      message: "Initial superadmin user created successfully.",
      user: {
        username: initialAdmin.username,
        email: initialAdmin.email,
        role: initialAdmin.role,
      },
    });
  } catch (error) {
    console.error("[Setup Admin Error]:", error);
    res.status(500).json({ success: false, message: error.message || "Failed to initialize admin." });
  }
};
