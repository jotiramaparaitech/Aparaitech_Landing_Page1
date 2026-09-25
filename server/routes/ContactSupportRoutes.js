import express from "express";
import { createSupportTicket, getSupportTickets, updateTicketStatus } from "../controllers/contactSupportController.js";

const router = express.Router();

// Create new support ticket
router.post("/", createSupportTicket);

// Get all support tickets with optional filtering
router.get("/", getSupportTickets);

// Update ticket status
router.put("/:ticketId/status", updateTicketStatus);

export default router;
