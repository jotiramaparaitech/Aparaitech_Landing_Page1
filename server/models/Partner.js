// server/models/Partner.js
import mongoose from "mongoose";

const partnerSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
    },
    name: {
      type: String,
      required: [true, "Contact person name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Business email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,
        "Please provide a valid email address",
      ],
    },
    phone: {
      type: String,
      trim: true,
      default: "",
    },
    partnershipType: {
      type: String,
      trim: true,
      default: "Technology Partner",
    },
    message: {
      type: String,
      trim: true,
      default: "",
    },
    status: {
      type: String,
      enum: ["Pending", "Reviewed", "Approved", "Declined"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

partnerSchema.index({ email: 1 });
partnerSchema.index({ status: 1 });
partnerSchema.index({ createdAt: -1 });

export default mongoose.models.Partner || mongoose.model("Partner", partnerSchema);
