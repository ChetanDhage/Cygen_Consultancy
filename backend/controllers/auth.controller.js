// import { registerConsultant, loginUser } from "../services/auth.service.js";
// import { uploadToCloudinary } from "../config/cloudinary.js";
// import Consultant from "../models/Consultant.js";

// // Handle consultant registration
// export const register = async (req, res) => {
//   try {
//     // Process file uploads
//     const files = {};
//     for (const [fieldname, fileArray] of Object.entries(req.files)) {
//       if (fileArray.length > 0) {
//         const file = fileArray[0];
//         const result = await uploadToCloudinary(
//           file.buffer,
//           `cygen/consultants/${req.body.email}/${fieldname}`
//         );
//         files[fieldname] = [{ path: result.secure_url }];
//       }
//     }

//     // Handle certification files separately
//     if (req.files.certificationFiles) {
//       files.certifications = await Promise.all(
//         req.files.certificationFiles.map(async (file) => {
//           const result = await uploadToCloudinary(
//             file.buffer,
//             `cygen/consultants/${req.body.email}/certifications`
//           );
//           return { path: result.secure_url };
//         })
//       );
//     }

//     // Create user and consultant
//     const user = await registerConsultant(req.body, files);

//     res.status(201).json({
//       success: true,
//       message: "Application submitted successfully",
//       data: user,
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // Handle user login
// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await loginUser(email, password);

//     res.json({
//       success: true,
//       data: user,
//     });
//   } catch (error) {
//     res.status(401).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };


import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Consultant from "../models/Consultant.js";
import { generateToken } from "../services/auth.service.js";

export const register = async (req, res) => {
  try {
    const { email, password, ...consultantData } = req.body;

    // Check if user exists
    const existingConsultant = await Consultant.findOne({ email });
    if (existingConsultant) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // Create consultant
    const consultant = await Consultant.create(consultantData);

    // Generate token
    const token = generateToken(consultant._id);

    res.status(201).json({ consultant, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find consultant
    const consultant = await Consultant.findOne({ email });
    if (!consultant) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, consultant.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate token
    const token = generateToken(consultant._id);

    res.json({ consultant, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};