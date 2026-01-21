import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/ContactRoutes.js";
import subscriberUser from "./routes/SubscribeRoute.js";

dotenv.config();

const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "https://www.aparaitech.org",
  "https://aparaitech.org",
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// ✅ preflight for all routes
app.options(/.*/, cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

connectDB();

app.use("/api/contacts", contactRoutes);
app.use("/api/subscribe", subscriberUser);

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// app.listen(5000, ()=> {
//   console.log('Listening');
// })

export default app;
