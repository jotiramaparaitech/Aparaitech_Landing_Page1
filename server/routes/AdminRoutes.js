// server/routes/AdminRoutes.js
import express from "express";
import { getAdminStats, exportCSV } from "../controllers/adminController.js";
import { protectAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/stats", protectAdmin, getAdminStats);
router.get("/export/:collection", protectAdmin, exportCSV);

export default router;
