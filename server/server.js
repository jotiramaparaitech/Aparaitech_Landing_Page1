import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/ContactRoutes.js";
import subscriberUser from "./routes/SubscribeRoute.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

connectDB();

app.use("/api/contacts", contactRoutes);
app.use("/api/subscribe", subscriberUser);

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

export default app;
