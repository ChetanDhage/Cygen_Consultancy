import express from "express";
import { createCustomer } from "../controllers/customer.controller.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/signup", upload.array("supportDocs"), createCustomer);

export default router;
