import Customer from "../models/Customer.js";
import { uploadToCloudinary } from "../config/cloudinary.js";
import User from "../models/User.js";

// Create consultation request
export const createCustomer = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      country,
      countryCode,
      email,
      password,
      phone,
      linkedInProfile,
      companyName,
      companyDetails,
      serviceArea,
      requirements,
      urgentRequest
    } = req.body;

    const userExists = await User.findOne({ email });
        if (userExists) {
          return res.status(400).json({ message: "Email already in use" });
        }
    
        const user = await User.create({
          name:firstName,
          email,
          password,
          role: "user",
          contactNumber:phone,
          location:country,
          linkedInProfile,
        });


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

    const request = await Customer.create({
      user,
      firstName,
      lastName,
      country,
      countryCode,
      email,
      password,
      phone,
      linkedInProfile,
      companyName,
      companyDetails,
      serviceArea,
      requirements,
      urgentRequest: urgentRequest || false,
      files,
    });

    res.status(201).json({
      message: "Customer profile submitted successfully",
      requestId: request._id,
    });
  } catch (error) {
    next(error);
  }
};
