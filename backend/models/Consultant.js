import User from "./User.js";

const consultantSchema = new mongoose.Schema({
  // Personal Info
  fullName: { type: String, required: true },
  dateOfBirth: Date,
  contactNumber: String,
  location: String,
  linkedIn: String,
  avatar: String,

  // Professional Info
  designation: String,
  currentCompany: String,
  industry: String,
  skills: [String],
  languages: [String],
  fee: Number,
  workMode: String,
  about: String,
  resume: String,

  // Certifications
  certifications: [
    {
      name: String,
      file: String,
    },
  ],
});

export default User.discriminator("Consultant", consultantSchema);
