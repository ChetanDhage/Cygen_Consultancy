import express from "express";
import {
  getUserProfile,
  updateUserProfile,
  getConsultants,
  getConsultantById,
} from "../controllers/user.controller.js";
import {protect} from "../middleware/auth.js";
import admin from "../middleware/admin.js";

const router = express.Router();

router
  .route("/profile/:id")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.route("/consultants").get(getConsultants);

router.route("/consultants/:id").get(getConsultantById);

export default router;
