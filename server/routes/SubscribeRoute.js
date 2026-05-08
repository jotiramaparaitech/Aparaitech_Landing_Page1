import express, { Router } from 'express';
import { subscriberUser } from '../controllers/subscribeController.js';

const router = express.Router();

router.post('/', subscriberUser);

export default router;