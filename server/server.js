import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/ContactRoutes.js";
import subscriberUser from "./routes/SubscribeRoute.js";
import partnerRoutes from "./routes/PartnerRoutes.js";
import contactSupportRoutes from "./routes/ContactSupportRoutes.js";


dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

connectDB();

app.use("/api/contacts", contactRoutes);
app.use("/api/subscribe", subscriberUser);
app.use("/api/partner", partnerRoutes);
app.use("/api/support-tickets", contactSupportRoutes);

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`✅ Server running on port ${process.env.PORT}`);
});
export default app;
