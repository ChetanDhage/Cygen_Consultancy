import express from "express";
import {
  getConsultantQueries,
  createQuery,
  updateQueryStatus,
} from "../controllers/query.controller.js";
import { protect } from "../middleware/auth.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// Consultant routes
router.get("/", protect, getConsultantQueries);
router.put("/:id", protect, updateQueryStatus);

// User routes
router.post("/", protect, upload.array("supportDocs"), createQuery);

export default router;
