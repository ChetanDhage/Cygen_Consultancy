import Consultant from "../models/Consultant.js";
import User from "../models/User.js";
import Verification from "../models/Verification.js";
import {
  uploadToCloudinary,
  deleteFromCloudinary,
} from "../config/cloudinary.js";
import { notFoundError } from "../utils/helpers.js";

// @desc    Update consultant profile
// @route   PUT /api/consultants/profile
export const updateConsultantProfile = async (req, res, next) => {
  try {
    const consultant = await Consultant.findOne({ user: req.user._id })
      .populate("user")
      .populate("verification");

    if (!consultant) {
      return notFoundError("Consultant profile not found", res);
    }

    // Update user fields
    if (req.body.name) consultant.user.name = req.body.name;
    if (req.body.contactNumber)
      consultant.user.contactNumber = req.body.contactNumber;
    if (req.body.location) consultant.user.location = req.body.location;
    if (req.body.linkedInProfile)
      consultant.user.linkedInProfile = req.body.linkedInProfile;

    // Update consultant fields
    if (req.body.designation) consultant.designation = req.body.designation;
    if (req.body.company) consultant.company = req.body.company;
    if (req.body.industry) consultant.industry = req.body.industry;
    if (req.body.skills)
      consultant.skills = req.body.skills
        .split(",")
        .map((skill) => skill.trim());
    if (req.body.yearsOfExperience)
      consultant.yearsOfExperience = req.body.yearsOfExperience;
    if (req.body.about) consultant.about = req.body.about;
    if (req.body.languages)
      consultant.languages = req.body.languages
        .split(",")
        .map((lang) => lang.trim());
    if (req.body.expectedFee) consultant.expectedFee = req.body.expectedFee;

    // Handle profile photo update
    if (req.files?.profilePhoto) {
      // Delete old photo if exists
      if (consultant.user.profilePhoto?.publicId) {
        await deleteFromCloudinary(consultant.user.profilePhoto.publicId);
      }

      const result = await uploadToCloudinary(req.files.profilePhoto[0].path);
      consultant.user.profilePhoto = {
        url: result.secure_url,
        publicId: result.public_id,
      };
    }

    // Handle resume update
    if (req.files?.resume) {
      // Delete old resume if exists
      if (consultant.resume?.publicId) {
        await deleteFromCloudinary(consultant.resume.publicId);
      }

      const result = await uploadToCloudinary(req.files.resume[0].path);
      consultant.resume = {
        url: result.secure_url,
        publicId: result.public_id,
      };
    }

    // Handle certifications
    if (req.files?.certifications) {
      for (let i = 0; i < req.files.certifications.length; i++) {
        const file = req.files.certifications[i];
        const result = await uploadToCloudinary(file.path);

        // Get certification name from body
        const certName =
          req.body.certifications?.[i]?.name || file.originalname;

        // Add to verification documents
        consultant.verification.documents.push({
          name: certName,
          fileUrl: result.secure_url,
          publicId: result.public_id,
        });
      }
    }

    // Save all changes
    await consultant.user.save();
    await consultant.verification.save();
    const updatedConsultant = await consultant.save();

    res.json({
      message: "Profile updated successfully",
      consultant: updatedConsultant,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get consultant profile
// @route   GET /api/consultants/profile
export const getConsultantProfile = async (req, res, next) => {
  try {
    const consultant = await Consultant.findOne({ user: req.user._id })
      .populate(
        "user",
        "name email contactNumber location linkedInProfile profilePhoto"
      )
      .populate("verification");

    if (!consultant) {
      return notFoundError("Consultant profile not found", res);
    }

    res.json(consultant);
  } catch (error) {
    next(error);
  }
};

// @desc    Remove certification
// @route   DELETE /api/consultants/certifications/:id
export const removeCertification = async (req, res, next) => {
  try {
    const { id } = req.params;
    const consultant = await Consultant.findOne({
      user: req.user._id,
    }).populate("verification");

    if (!consultant) {
      return notFoundError("Consultant profile not found", res);
    }

    // Find certification in verification documents
    const certIndex = consultant.verification.documents.findIndex(
      (doc) => doc._id.toString() === id
    );

    if (certIndex === -1) {
      return notFoundError("Certification not found", res);
    }

    const certification = consultant.verification.documents[certIndex];

    // Delete from Cloudinary
    await deleteFromCloudinary(certification.publicId);

    // Remove from array
    consultant.verification.documents.splice(certIndex, 1);
    await consultant.verification.save();

    res.json({ message: "Certification removed successfully" });
  } catch (error) {
    next(error);
  }
};
