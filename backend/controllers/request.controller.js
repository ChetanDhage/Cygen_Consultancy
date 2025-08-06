import ConsultationRequest from "../models/ConsultationRequest.js";
import { uploadToCloudinary } from "../config/cloudinary.js";
import User from "../models/User.js";

// Create consultation request
export const createConsultationRequest = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      country,
      countryCode,
      email,
      phone,
      timezone,
      companyName,
      companyDetails,
      serviceArea,
      requirements,
      urgentRequest,
    } = req.body;

    // Find or create user
    let user = null;
    if (req.user) {
      user = req.user._id;
    } else {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        user = existingUser._id;
      }
    }

    // Process file uploads
    const files = [];
    if (req.files?.supportDocs) {
      for (const file of req.files.supportDocs) {
        const result = await uploadToCloudinary(file.path);
        files.push({
          name: file.originalname,
          url: result.secure_url,
          publicId: result.public_id,
        });
      }
    }

    const request = await ConsultationRequest.create({
      user,
      firstName,
      lastName,
      country,
      countryCode,
      email,
      phone,
      timezone,
      companyName,
      companyDetails,
      serviceArea,
      requirements,
      urgentRequest: urgentRequest || false,
      files,
    });

    res.status(201).json({
      message: "Consultation request submitted successfully",
      requestId: request._id,
    });
  } catch (error) {
    next(error);
  }
};
