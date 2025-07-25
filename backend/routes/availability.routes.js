import express from "express";
import {
  updateAvailabilityStatus,
  getAvailabilitySlots,
  setAvailabilitySlots,
} from "../controllers/availability.controller.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.use(auth);

router.put("/status", updateAvailabilityStatus);
router.get("/slots", getAvailabilitySlots);
router.put("/slots", setAvailabilitySlots);

export default router;
