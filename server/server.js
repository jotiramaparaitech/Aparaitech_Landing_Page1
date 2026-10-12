// server/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import path from "path";

import connectDB, { isDbConnected } from "./config/db.js";
import contactRoutes from "./routes/ContactRoutes.js";
import careerRoutes from "./routes/CareerRoutes.js";
import appointmentRoutes from "./routes/AppointmentRoutes.js";
import subscriberUser from "./routes/SubscribeRoute.js";
import partnerRoutes from "./routes/PartnerRoutes.js";
import contactSupportRoutes from "./routes/ContactSupportRoutes.js";
import authRoutes from "./routes/AuthRoutes.js";
import adminRoutes from "./routes/AdminRoutes.js";

dotenv.config();

const app = express();

// Security Headers
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
  })
);

// CORS configuration
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "https://aparaitech.org",
  "https://www.aparaitech.org",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin) || process.env.NODE_ENV !== "production") {
        callback(null, true);
      } else {
        callback(new Error("CORS policy violation"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Rate limiter for general public submission routes
const submissionLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests from this IP address, please try again in a few minutes.",
  },
});

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Pre-connect / establish DB connection middleware
app.use(async (req, res, next) => {
  try {
    const uri = process.env.MONGODB_URI || process.env.MONGO_URL;
    if (uri) {
      await connectDB();
    }
  } catch (err) {
    // Non-blocking log so static or healthcheck endpoints still function
    console.warn(`[DB Init Warning]: ${err.message}`);
  }
  next();
});

// Serve uploaded resumes statically only for development (production uses authenticated endpoint)
app.use("/uploads/resumes", express.static(path.resolve(process.cwd(), "uploads", "resumes")));

// API Routes
app.use("/api/contacts", submissionLimiter, contactRoutes);
app.use("/api/careers", submissionLimiter, careerRoutes);
app.use("/api/appointments", submissionLimiter, appointmentRoutes);
app.use("/api/subscribe", submissionLimiter, subscriberUser);
app.use("/api/partner", submissionLimiter, partnerRoutes);
app.use("/api/support-tickets", submissionLimiter, contactSupportRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

// Health check endpoint
app.get("/api/health", async (req, res) => {
  const dbStatus = isDbConnected();
  res.json({
    status: "ok",
    service: "APARAITECH Software Platform API",
    database: dbStatus ? "Connected" : "Disconnected",
    timestamp: new Date().toISOString(),
  });
});

app.get("/", (req, res) => {
  res.send("APARAITECH Software Core API running 🚀");
});

// Centralized error handling
app.use((err, req, res, next) => {
  console.error("[Internal Server Error]:", err.stack || err.message);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "An unexpected internal server error occurred.",
  });
});

const PORT = process.env.PORT || 5000;
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`[APARAITECH Backend] Server running on http://localhost:${PORT}`);
  });
}

export default app;
