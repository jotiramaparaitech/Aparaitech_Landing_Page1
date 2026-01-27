// index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/ContactRoutes.js";
import subscriberUser from "./routes/SubscribeRoute.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:5173",
    "https://aparaitech.org",
    "https://www.aparaitech.org",
  ],
  methods: ["GET", "POST"],
}));

app.use(express.json());

app.use("/api/contacts", contactRoutes);
app.use("/api/subscribe", subscriberUser);

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

export default app;
