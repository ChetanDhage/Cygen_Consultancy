import mongoose from "mongoose";

const consultantSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  fullName: { type: String, required: true },
  dateOfBirth: Date,
  contactNumber: String,
  location: String,
  linkedIn: String,
  avatar: String,
  designation: String,
  currentCompany: String,
  industry: String,
  skills: [String],
  languages: [String],
  fee: Number,
  workMode: String,
  about: String,
  resume: String,
  certifications: [
    {
      name: String,
      file: String,
    },
  ],
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  availability: {
    type: Boolean,
    default: false,
  },
  earnings: {
    total: { type: Number, default: 0 },
    available: { type: Number, default: 0 },
    pending: { type: Number, default: 0 },
  },
  tokens: [
    {
      token: { type: String, required: true },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

const Consultant = mongoose.model("Consultant", consultantSchema);
export default Consultant;
