import express from "express";
import { uploadDocument } from "../controllers/document.controller.js";
import { auth } from "../middleware/auth.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

router.use(auth);

router.post("/upload", upload.single("file"), uploadDocument);

export default router;
