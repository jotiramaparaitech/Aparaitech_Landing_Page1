import express from "express";
import { createContact, createSupportTicket, getContacts } from "../controllers/contactController.js";

const router = express.Router();

router.get("/", getContacts);
router.post("/", createContact);
router.post("/support", createSupportTicket);

export default router;
