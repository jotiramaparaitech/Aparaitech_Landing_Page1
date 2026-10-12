// server/routes/ContactRoutes.js
import express from "express";
import {
  createContact,
  getContacts,
  updateContactStatus,
  deleteContact,
} from "../controllers/contactController.js";
import { protectAdmin } from "../middleware/auth.js";

const router = express.Router();

router.post("/", createContact);
router.get("/", protectAdmin, getContacts);
router.patch("/:id/status", protectAdmin, updateContactStatus);
router.delete("/:id", protectAdmin, deleteContact);

export default router;
