import mongoose from "mongoose";

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
    dateOfBirth: Date,
    contactNumber: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    linkedInProfile: String,
    designation: {
      type: String,
      required: true,
    },
    currentCompany: String,
    industry: {
      type: String,
      required: true,
    },
    skills: {
      type: [String],
      required: true,
    },
    languages: [String],
    fee: {
      type: Number,
      required: true,
    },
    workMode: {
      type: String,
      enum: ["remote", "onsite", "hybrid"],
      default: "remote",
    },
    about: {
      type: String,
      required: true,
    },
    resume: {
      url: String,
      publicId: String,
    },
    certifications: [certificationSchema],
    yearsOfExperience: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    rejectionReason: String,
    availability: {
      type: [
        {
          day: String,
          slots: [String],
        },
      ],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Add virtual for average rating (if implementing reviews)
consultantSchema.virtual("averageRating").get(function () {
  // Implementation would depend on your review system
  return 4.5; // Example value
});

export default mongoose.model("Consultant", consultantSchema);
