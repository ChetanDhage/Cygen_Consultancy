import express from "express";
import {
  getAllConsultants,
  updateConsultantProfile,
} from "../controllers/consultant.controller.js";
import { protect } from "../middleware/auth.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/", getAllConsultants);
router.put(
  "/profile",
  protect,
  upload.array("certifications", 10),
  updateConsultantProfile
);

export default router;
