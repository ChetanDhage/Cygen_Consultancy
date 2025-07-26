// models/Verification.js
import mongoose from "mongoose";
import { VERIFICATION_STATUS } from "../config/constants.js"; // Import the constant

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
      enum: Object.values(VERIFICATION_STATUS), // Now properly defined
      default: VERIFICATION_STATUS.PENDING,
    },
    reviewedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    reviewDate: Date,
    rejectionReason: String,
  },
  { timestamps: true }
);

export default mongoose.model("Verification", verificationSchema);
