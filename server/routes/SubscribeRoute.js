// server/routes/SubscribeRoute.js
import express from "express";
import {
  subscriberUser,
  getSubscribers,
  deleteSubscriber,
} from "../controllers/subscribeController.js";
import { protectAdmin } from "../middleware/auth.js";

const router = express.Router();

router.post("/", subscriberUser);
router.get("/", protectAdmin, getSubscribers);
router.delete("/:id", protectAdmin, deleteSubscriber);

export default router;