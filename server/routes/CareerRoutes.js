// server/routes/CareerRoutes.js
import express from "express";
import {
  createJobApplication,
  getJobApplications,
  getResumeFile,
  updateApplicationStatus,
  deleteApplication,
} from "../controllers/careerController.js";
import { protectAdmin } from "../middleware/auth.js";
import { uploadResume } from "../middleware/upload.js";

const router = express.Router();

router.post("/apply", uploadResume.single("resume"), createJobApplication);
router.get("/applications", protectAdmin, getJobApplications);
router.get("/resume/:filename", protectAdmin, getResumeFile);
router.patch("/applications/:id/status", protectAdmin, updateApplicationStatus);
router.delete("/applications/:id", protectAdmin, deleteApplication);

export default router;
