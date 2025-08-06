import express from "express";
import { createConsultationRequest } from "../controllers/request.controller.js";
import { protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.post("/", upload.array("supportDocs"), createConsultationRequest);

export default router;
