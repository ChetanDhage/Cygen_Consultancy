import mongoose from "mongoose";
import { VERIFICATION_STATUS } from "../config/constants.js";

const verificationSchema = new mongoose.Schema(
  {
    consultant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    documents: [
      {
        name: String,
        url: String,
        publicId: String,
      },
    ],
    status: {
      type: String,
      enum: Object.values(VERIFICATION_STATUS),
      default: VERIFICATION_STATUS.PENDING,
    },
    reviewedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    reviewDate: Date,
    rejectionReason: String,
    // New fields for sub-admin workflow
    subAdminReview: {
      subAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      comments: String,
      decision: {
        type: String,
        enum: ["approve", "reject", "request-changes"],
      },
      date: Date,
    },
    domain: {
      type: String,
      enum: [
        "Cloud Security",
        "Network Security",
        "AI Threat Analysis",
        "Data Protection",
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Verification", verificationSchema);
