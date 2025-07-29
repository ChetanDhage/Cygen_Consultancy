// models/Consultant.js
import mongoose from "mongoose";
import { CONSULTANT_STATUS, WORK_MODES } from "../config/constants.js";

const certificationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fileUrl: {
    type: String,
    required: true,
  },
  publicId: {
    type: String,
    required: true,
  },
  issuedDate: Date,
  issuingOrganization: String,
});

const consultantSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    yearsOfExperience: {
      type: Number,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    certifications: [certificationSchema],
    status: {
      type: String,
      enum: Object.values(CONSULTANT_STATUS),
      default: CONSULTANT_STATUS.PENDING,
    },
    verification: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Verification",
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Add virtual for average rating
consultantSchema.virtual("averageRating").get(function () {
  // Implementation would depend on your review system
  return 4.5; // Example value
});

export default mongoose.model("Consultant", consultantSchema);
