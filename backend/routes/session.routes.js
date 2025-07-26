import express from "express";
import {
  getConsultantSessions,
  getSessionDetails,
  createFollowUpSession,
} from "../controllers/session.controller.js";
import { protect, consultant } from "../middleware/auth.js";

const router = express.Router();

router.use(protect, consultant);

router.get("/", getConsultantSessions);
router.get("/:id", getSessionDetails);
router.post("/follow-up", createFollowUpSession);

export default router;
