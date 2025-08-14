import express from "express";
import {
  getConsultantSessions,
  getSessionDetails,
  createFollowUpSession,
  addSessionDocument, // Add this
} from "../controllers/session.controller.js";
import { protect, consultant } from "../middleware/auth.js";
import upload from "../middleware/upload.js"; // Add this

const router = express.Router();

router.use(protect, consultant);

router.get("/", getConsultantSessions);
router.get("/:id", getSessionDetails);
router.post("/follow-up", createFollowUpSession);
router.post(
  "/:sessionId/documents",
  upload.single("document"),
  addSessionDocument
); // Add this

export default router;
