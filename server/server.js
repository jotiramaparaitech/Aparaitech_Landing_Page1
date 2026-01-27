// index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/ContactRoutes.js";
import subscriberUser from "./routes/SubscribeRoute.js";
import partnerRoutes from "./routes/PartnerRoutes.js";
import contactSupportRoutes from "./routes/ContactSupportRoutes.js";


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
app.use("/api/partner", partnerRoutes);
app.use("/api/support-tickets", contactSupportRoutes);

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

export default app;
