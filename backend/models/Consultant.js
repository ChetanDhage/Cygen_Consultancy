import mongoose from "mongoose";
import { CONSULTANT_STATUS } from "../config/constants.js";

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
    designation: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    skills: {
      type: [String],
      required: true,
    },
    yearsOfExperience: {
      type: Number,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    languages: {
      type: [String],
      required: true,
    },
    expectedFee: {
      type: Number,
      required: true,
    },
    resume: {
      url: String,
      publicId: String,
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
