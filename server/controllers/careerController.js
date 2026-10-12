// server/controllers/careerController.js
import JobApplication from "../models/JobApplication.js";
import connectDB from "../config/db.js";
import path from "path";
import fs from "fs";

export const createJobApplication = async (req, res) => {
  try {
    await connectDB();

    const {
      firstName,
      lastName,
      fullName,
      email,
      phone,
      appliedPosition,
      jobTitle,
      jobId,
      linkedin,
      github,
      portfolio,
      coverLetter,
      workAuthorization,
      veteranStatus,
      resumeUrl,
    } = req.body;

    const candidateName = (fullName || `${firstName || ""} ${lastName || ""}`).trim();
    const position = (appliedPosition || jobTitle || "Open Application").trim();

    if (!candidateName) {
      return res.status(400).json({ success: false, message: "Full name is required." });
    }
    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required." });
    }
    if (!phone) {
      return res.status(400).json({ success: false, message: "Phone number is required." });
    }

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: "Please provide a valid email address." });
    }

    let resumeData = {
      resumeFileName: "",
      resumeOriginalName: "",
      resumeUrl: resumeUrl || "",
      resumeMimeType: "",
      resumeSize: 0,
    };

    if (req.file) {
      resumeData = {
        resumeFileName: req.file.filename,
        resumeOriginalName: req.file.originalname,
        resumeUrl: `/api/careers/resume/${req.file.filename}`,
        resumeMimeType: req.file.mimetype,
        resumeSize: req.file.size,
      };
    }

    const newApplication = await JobApplication.create({
      fullName: candidateName,
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      appliedPosition: position,
      jobId: jobId || "",
      linkedin: linkedin ? linkedin.trim() : "",
      github: github ? github.trim() : "",
      portfolio: portfolio ? portfolio.trim() : "",
      coverLetter: coverLetter ? coverLetter.trim() : "",
      workAuthorization: workAuthorization || "Authorized",
      veteranStatus: veteranStatus || "",
      ...resumeData,
      status: "Submitted",
      applicationDate: new Date(),
    });

    return res.status(201).json({
      success: true,
      message: "Application submitted successfully! Our recruiting team will review your profile.",
      data: {
        id: newApplication._id,
        applicationDate: newApplication.applicationDate,
        appliedPosition: newApplication.appliedPosition,
      },
    });
  } catch (error) {
    console.error("[Job Application Error]:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to process job application. Please try again.",
    });
  }
};

export const getJobApplications = async (req, res) => {
  try {
    await connectDB();
    const { status, search, position, page = 1, limit = 50 } = req.query;

    const query = {};
    if (status && status !== "All") query.status = status;
    if (position && position !== "All") query.appliedPosition = { $regex: position, $options: "i" };
    if (search) {
      query.$or = [
        { fullName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
        { appliedPosition: { $regex: search, $options: "i" } },
      ];
    }

    const skip = (Number(page) - 1) * Number(limit);
    const [applications, total] = await Promise.all([
      JobApplication.find(query).sort({ createdAt: -1 }).skip(skip).limit(Number(limit)),
      JobApplication.countDocuments(query),
    ]);

    res.json({
      success: true,
      data: applications,
      total,
      page: Number(page),
      pages: Math.ceil(total / Number(limit)),
    });
  } catch (error) {
    console.error("[Get Job Applications Error]:", error);
    res.status(500).json({ success: false, message: "Failed to retrieve job applications." });
  }
};

export const getResumeFile = async (req, res) => {
  try {
    const { filename } = req.params;
    // Prevent path traversal
    const safeFilename = path.basename(filename);
    const filePath = path.resolve(process.cwd(), "uploads", "resumes", safeFilename);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ success: false, message: "Resume file not found on server." });
    }

    return res.sendFile(filePath);
  } catch (error) {
    console.error("[Get Resume File Error]:", error);
    res.status(500).json({ success: false, message: "Could not stream resume file." });
  }
};

export const updateApplicationStatus = async (req, res) => {
  try {
    await connectDB();
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ["Submitted", "Under Review", "Shortlisted", "Interview Scheduled", "Rejected", "Hired"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ success: false, message: "Invalid application status." });
    }

    const updated = await JobApplication.findByIdAndUpdate(id, { status }, { new: true });
    if (!updated) {
      return res.status(404).json({ success: false, message: "Application record not found." });
    }

    res.json({ success: true, message: "Application status updated.", data: updated });
  } catch (error) {
    console.error("[Update Application Status Error]:", error);
    res.status(500).json({ success: false, message: "Failed to update status." });
  }
};

export const deleteApplication = async (req, res) => {
  try {
    await connectDB();
    const { id } = req.params;
    const record = await JobApplication.findByIdAndDelete(id);

    if (record && record.resumeFileName) {
      const filePath = path.resolve(process.cwd(), "uploads", "resumes", record.resumeFileName);
      if (fs.existsSync(filePath)) {
        try { fs.unlinkSync(filePath); } catch (e) { /* ignore */ }
      }
    }

    res.json({ success: true, message: "Application deleted successfully." });
  } catch (error) {
    console.error("[Delete Application Error]:", error);
    res.status(500).json({ success: false, message: "Failed to delete application." });
  }
};
