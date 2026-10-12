// server/models/JobApplication.js
import mongoose from "mongoose";

const jobApplicationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Candidate full name is required"],
      trim: true,
      maxlength: [120, "Name cannot exceed 120 characters"],
    },
    email: {
      type: String,
      required: [true, "Candidate email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,
        "Please provide a valid email address",
      ],
    },
    phone: {
      type: String,
      required: [true, "Contact phone number is required"],
      trim: true,
    },
    appliedPosition: {
      type: String,
      required: [true, "Applied position is required"],
      trim: true,
    },
    jobId: {
      type: String,
      trim: true,
      default: "",
    },
    linkedin: {
      type: String,
      trim: true,
      default: "",
    },
    github: {
      type: String,
      trim: true,
      default: "",
    },
    portfolio: {
      type: String,
      trim: true,
      default: "",
    },
    coverLetter: {
      type: String,
      trim: true,
      default: "",
    },
    workAuthorization: {
      type: String,
      trim: true,
      default: "Authorized",
    },
    veteranStatus: {
      type: String,
      trim: true,
      default: "",
    },
    resumeFileName: {
      type: String,
      default: "",
    },
    resumeOriginalName: {
      type: String,
      default: "",
    },
    resumeUrl: {
      type: String,
      default: "",
    },
    resumeMimeType: {
      type: String,
      default: "",
    },
    resumeSize: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["Submitted", "Under Review", "Shortlisted", "Interview Scheduled", "Rejected", "Hired"],
      default: "Submitted",
    },
    applicationDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

jobApplicationSchema.index({ email: 1, appliedPosition: 1 });
jobApplicationSchema.index({ status: 1 });
jobApplicationSchema.index({ createdAt: -1 });

export default mongoose.models.JobApplication || mongoose.model("JobApplication", jobApplicationSchema);
