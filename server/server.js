import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/ContactRoutes.js";
import subscriberUser from "./routes/SubscribeRoute.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:5173","https://www.aparaitech.org/"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.options(/.*/, cors());

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
