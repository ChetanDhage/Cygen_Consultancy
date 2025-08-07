import User from "../models/User.js";
import Consultant from "../models/Consultant.js";
import Verification from "../models/Verification.js";
import generateToken from "../utils/generateToken.js";
import { sendVerificationEmail } from "../utils/email.js";
import { uploadToCloudinary } from "../config/cloudinary.js";
import crypto from "crypto";

// @desc    Register a new user
// @route   POST /api/auth/register
export const register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create user
    const user = await User.create({
      name,
      email,
      password,
      role: role || "user",
    });

    // Generate verification token
    const verificationToken = user.generateVerificationToken();
    await user.save();

    // Send verification email
    await sendVerificationEmail(user, verificationToken, req);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Register as consultant
// @route   POST /api/auth/register/consultant
export const registerConsultant = async (req, res, next) => {
  try {
    // Step 1: Create user account
    const { name, email, password, contactNumber, location, linkedInProfile } =
      req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const user = await User.create({
      name,
      email,
      password,
      role: "consultant",
      contactNumber,
      location,
      linkedInProfile,
    });

    // Upload profile photo if exists
    let profilePhoto = {};
    if (req.files?.profilePhoto) {
      const result = await uploadToCloudinary(req.files.profilePhoto[0].path);
      user.profilePhoto = {
        url: result.secure_url,
        publicId: result.public_id,
      };
      await user.save();
    }

    // Step 2: Create consultant profile
    const consultantData = {
      user: user._id,
      name, email,
      role: user.role,
      password, contactNumber, location, linkedInProfile,
      designation: req.body.designation,
      company: req.body.company,
      industry: req.body.industry,
      skills: req.body.skills.split(",").map((skill) => skill.trim()),
      yearsOfExperience: req.body.yearsOfExperience,
      about: req.body.about,
      languages: req.body.languages.split(",").map((lang) => lang.trim()),
      expectedFee: req.body.expectedFee,
    };

    // Upload resume if exists
    if (req.files?.resume) {
      const result = await uploadToCloudinary(req.files.resume[0].path);
      consultantData.resume = {
        url: result.secure_url,
        publicId: result.public_id,
      };
    }

    const consultant = await Consultant.create(consultantData);

    // Step 3: Process certifications
    const certifications = [];
    if (req.files?.certifications) {
      for (let i = 0; i < req.files.certifications.length; i++) {
        const file = req.files.certifications[i];
        const result = await uploadToCloudinary(file.path);

        // Get certification name from body
        const certName =
          req.body.certifications?.[i]?.name || file.originalname;

        certifications.push({
          name: certName,
          fileUrl: result.secure_url,
          publicId: result.public_id,
        });
      }
    }

    // Create verification record
    const verification = await Verification.create({
      consultant: user._id,
      documents: certifications,
      status: "approved", // Default to approved
    });

    // Associate verification with consultant
    consultant.verification = verification._id;
    await consultant.save();

    // Generate verification token for email
    const verificationToken = user.generateVerificationToken();
    await user.save();

    // Send verification email
    await sendVerificationEmail(user, verificationToken, req);

    res.status(201).json({
      message: "Consultant application submitted. Please verify your email.",
      userId: user._id,
      consultantId: consultant._id,
      role: user.role,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Login user
// @route   POST /api/auth/login
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    // For consultants, check if their profile is approved
    if (user.role === "consultant") {
      const consultant = await Consultant.findOne({ user: user._id });
      if (!consultant || consultant.status !== "approved") {
        return res.status(403).json({ message: "Your consultant profile is under review" });
      }
    }

    if (user.role === "user") {
        return res.status(403).json({ message: "login Succcessful" });
    }


    if (user && (await user.matchPassword(password))) {
      if (!user.isVerified) {
        return res.status(401).json({
          message: "Please verify your email first",
          userId: user._id,
        });
      }

      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
        profilePhoto: user.profilePhoto?.url,
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Verify email
// @route   GET /api/auth/verify/:token
export const verifyEmail = async (req, res, next) => {
  try {
    const { token } = req.params;

    const user = await User.findOne({
      verificationToken: token,
      isVerified: false,
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();

    res.json({ message: "Email verified successfully" });
  } catch (error) {
    next(error);
  }
};

// @desc    Forgot password
// @route   POST /api/auth/forgot-password
export const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const resetToken = user.generatePasswordResetToken();
    await user.save();

    await sendPasswordResetEmail(user, resetToken, req);

    res.json({ message: "Password reset email sent" });
  } catch (error) {
    next(error);
  }
};

// @desc    Reset password
// @route   PUT /api/auth/reset-password/:token
export const resetPassword = async (req, res, next) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    res.json({ message: "Password updated successfully" });
  } catch (error) {
    next(error);
  }
};
