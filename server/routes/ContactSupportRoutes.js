// server/routes/ContactSupportRoutes.js
import express from "express";
import {
  createSupportTicket,
  getSupportTicketStatus,
  getSupportTickets,
  updateTicketStatus,
  deleteTicket,
} from "../controllers/contactSupportController.js";
import { protectAdmin } from "../middleware/auth.js";

const router = express.Router();

router.post("/", createSupportTicket);
router.get("/status/:ticketId", getSupportTicketStatus);
router.get("/", protectAdmin, getSupportTickets);
router.patch("/:ticketId/status", protectAdmin, updateTicketStatus);
router.delete("/:ticketId", protectAdmin, deleteTicket);

export default router;
