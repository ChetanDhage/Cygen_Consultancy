import Consultant from "../models/Consultant.js";
import User from "../models/User.js";
import { uploadToCloudinary } from "../config/cloudinary.js";
import { notFoundError } from "../utils/helpers.js";

// Get all consultants
export const getAllConsultants = async (req, res, next) => {
  try {
    const { category, minRating, maxFee, experience } = req.query;

    const filter = { status: "approved" };
    if (category) filter.industry = category;
    if (maxFee) filter.fee = { $lte: maxFee };
    if (experience) filter.yearsOfExperience = { $gte: experience };

    const consultants = await Consultant.find(filter)
      .populate("user", "name email")
      .select("-certifications -resume");

    res.json(consultants);
  } catch (error) {
    next(error);
  }
};

// Update consultant profile
export const updateConsultantProfile = async (req, res, next) => {
  try {
    const consultant = await Consultant.findOne({ user: req.user._id });

    if (!consultant) {
      return notFoundError("Consultant profile not found", res);
    }

    const {
      contactNumber,
      location,
      linkedInProfile,
      yearsOfExperience,
      fee,
      about,
      skills,
    } = req.body;

    if (contactNumber) consultant.contactNumber = contactNumber;
    if (location) consultant.location = location;
    if (linkedInProfile) consultant.linkedInProfile = linkedInProfile;
    if (yearsOfExperience) consultant.yearsOfExperience = yearsOfExperience;
    if (fee) consultant.fee = fee;
    if (about) consultant.about = about;
    if (skills)
      consultant.skills = skills.split(",").map((skill) => skill.trim());

    // Handle certifications
    if (req.files?.certifications) {
      for (const file of req.files.certifications) {
        const result = await uploadToCloudinary(file.path);
        consultant.certifications.push({
          name: file.originalname,
          fileUrl: result.secure_url,
          fileId: result.public_id,
        });
      }
    }

    await consultant.save();
    res.json(consultant);
  } catch (error) {
    next(error);
  }
};
