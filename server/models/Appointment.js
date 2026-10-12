// server/models/Appointment.js
import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    bookingId: {
      type: String,
      unique: true,
      required: true,
    },
    type: {
      type: String,
      enum: ["Executive Consultation", "Office Visited", "Technical Assessment", "General Consultation"],
      default: "Executive Consultation",
    },
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,
        "Please provide a valid email address",
      ],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    company: {
      type: String,
      trim: true,
      default: "",
    },
    service: {
      type: String,
      trim: true,
      default: "Enterprise AI Diagnostic",
    },
    visitDate: {
      type: String,
      default: "",
    },
    slotDay: {
      type: String,
      default: "",
    },
    slotTime: {
      type: String,
      default: "",
    },
    college: {
      type: String,
      default: "",
    },
    degree: {
      type: String,
      default: "",
    },
    passingYear: {
      type: String,
      default: "",
    },
    resumeUrl: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
    notes: {
      type: String,
      default: "",
    },
    nda: {
      type: String,
      default: "No",
    },
    source: {
      type: String,
      default: "Website Consultation Modal",
    },
    status: {
      type: String,
      enum: ["New Inquiry", "Confirmed", "Completed", "Cancelled"],
      default: "New Inquiry",
    },
    googleSheetSynced: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

appointmentSchema.index({ email: 1, createdAt: -1 });
appointmentSchema.index({ status: 1 });

export default mongoose.models.Appointment || mongoose.model("Appointment", appointmentSchema);
