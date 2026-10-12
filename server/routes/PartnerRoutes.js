// server/routes/PartnerRoutes.js
import express from "express";
import {
  createPartner,
  getPartners,
  updatePartnerStatus,
  deletePartner,
} from "../controllers/partnerController.js";
import { protectAdmin } from "../middleware/auth.js";

const router = express.Router();

router.post("/apply", createPartner);
router.get("/", protectAdmin, getPartners);
router.patch("/:id/status", protectAdmin, updatePartnerStatus);
router.delete("/:id", protectAdmin, deletePartner);

export default router;