// controllers/consultant.controller.js
import Consultant from "../models/Consultant.js";
import User from "../models/User.js";
import {
  uploadToCloudinary,
  deleteFromCloudinary,
} from "../config/cloudinary.js";
import { notFoundError } from "../utils/helpers.js";

// Update consultant profile (including certifications)
// Also updates contactNumber, which is required
export const updateConsultantProfile = async (req, res, next) => {
  try {
    const consultant = await Consultant.findOne({ user: req.user._id });
    if (!consultant) {
      return notFoundError("Consultant profile not found", res);
    }

    const { yearsOfExperience, specialization, contactNumber } = req.body;

    if (yearsOfExperience) consultant.yearsOfExperience = yearsOfExperience;
    if (specialization) consultant.specialization = specialization;
    if (contactNumber) consultant.contactNumber = contactNumber;

    // Handle certifications - Multer assigns files to req.files
    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        const result = await uploadToCloudinary(file.path);
        consultant.certifications.push({
          name: file.originalname,
          fileUrl: result.secure_url,
          publicId: result.public_id,
        });
      }
    }

    await consultant.save();

    const updatedConsultant = await Consultant.findById(consultant._id)
      .populate("user", "name email contactNumber")
      .populate("verification");

    res.json({
      message: "Profile updated successfully",
      consultant: updatedConsultant,
    });
  } catch (error) {
    next(error);
  }
};

// Remove a certification
export const removeCertification = async (req, res, next) => {
  try {
    const { certificationId } = req.params;
    const consultant = await Consultant.findOne({ user: req.user._id });

    if (!consultant) {
      return notFoundError("Consultant profile not found", res);
    }

    const certification = consultant.certifications.id(certificationId);
    if (!certification) {
      return notFoundError("Certification not found", res);
    }

    await deleteFromCloudinary(certification.publicId);

    consultant.certifications.pull(certificationId);
    await consultant.save();

    res.json({ message: "Certification removed successfully" });
  } catch (error) {
    next(error);
  }
};

// Get consultant profile
export const getConsultantProfile = async (req, res, next) => {
  try {
    const consultant = await Consultant.findOne({ user: req.user._id })
      .populate("user", "name email contactNumber profilePhoto")
      .populate("verification");

    if (!consultant) {
      return notFoundError("Consultant profile not found", res);
    }

    res.json(consultant);
  } catch (error) {
    next(error);
  }
};
