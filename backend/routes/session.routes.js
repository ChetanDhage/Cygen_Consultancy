import express from "express";
import {
  createSession,
  getSessions,
  getSessionDetails,
  updateSession,
} from "../controllers/session.controller.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.use(auth);

router.post("/", createSession);
router.get("/", getSessions);
router.get("/:id", getSessionDetails);
router.put("/:id", updateSession);

export default router;
