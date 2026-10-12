// server/middleware/auth.js
import jwt from "jsonwebtoken";
import AdminUser from "../models/AdminUser.js";
import connectDB from "../config/db.js";

const JWT_SECRET = process.env.JWT_SECRET || "aparaitech_secure_secret_key_2026";

export const protectAdmin = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, JWT_SECRET);

      await connectDB();
      const admin = await AdminUser.findById(decoded.id).select("-password");

      if (!admin) {
        return res.status(401).json({
          success: false,
          message: "Not authorized. User no longer exists.",
        });
      }

      req.admin = admin;
      return next();
    } catch (error) {
      console.error("[Auth Error]", error.message);
      return res.status(401).json({
        success: false,
        message: "Not authorized, invalid or expired session token.",
      });
    }
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Authorization token required for accessing administrative records.",
    });
  }
};

export const signToken = (id, role) => {
  return jwt.sign({ id, role }, JWT_SECRET, {
    expiresIn: "7d",
  });
};
