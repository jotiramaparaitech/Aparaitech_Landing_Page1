// server/models/Subscriber.js
import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,
        "Please provide a valid email address",
      ],
    },
    status: {
      type: String,
      enum: ["Subscribed", "Unsubscribed"],
      default: "Subscribed",
    },
    source: {
      type: String,
      default: "Website Footer Newsletter",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Subscriber ||
  mongoose.model("Subscriber", subscriberSchema);
