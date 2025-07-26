import User from "../models/User.js";
import Consultant from "../models/Consultant.js";
import generateToken from "../utils/generateToken.js";
import {
  sendVerificationEmail,
  sendPasswordResetEmail,
} from "../utils/email.js";
import {
  uploadToCloudinary,
  deleteFromCloudinary,
} from "../config/cloudinary.js";
import crypto from "crypto";

// @desc    Register a new user
// @route   POST /api/auth/register
export const register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      name,
      email,
      password,
      role: role || "customer",
    });

    const verificationToken = user.generateVerificationToken();
    await user.save();

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

// @desc    Register as consultant (multi-step)
// @route   POST /api/auth/register/consultant
export const registerConsultant = async (req, res, next) => {
  try {
    // Step 1: Create user account
    const { email, password, name, contactNumber } = req.body;

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
    });

    // Step 2: Handle file uploads
    let profilePhoto = {};
    if (req.files?.profilePhoto) {
      const result = await uploadToCloudinary(req.files.profilePhoto[0].path);
      profilePhoto = {
        url: result.secure_url,
        publicId: result.public_id,
      };
      user.profilePhoto = profilePhoto;
      await user.save();
    }

    let resume = {};
    if (req.files?.resume) {
      const result = await uploadToCloudinary(req.files.resume[0].path);
      resume = {
        url: result.secure_url,
        publicId: result.public_id,
      };
    }

    // Step 3: Process certifications
    const certifications = [];
    if (req.files?.certifications) {
      for (const file of req.files.certifications) {
        const result = await uploadToCloudinary(file.path);
        certifications.push({
          name: file.originalname,
          fileUrl: result.secure_url,
          publicId: result.public_id,
        });
      }
    }

    // Step 4: Create consultant profile
    const consultant = await Consultant.create({
      user: user._id,
      contactNumber,
      ...req.body,
      resume,
      certifications,
      status: "pending",
    });

    // Send verification email
    const verificationToken = user.generateVerificationToken();
    await user.save();
    await sendVerificationEmail(user, verificationToken, req);

    res.status(201).json({
      message: "Consultant application submitted. Please verify your email.",
      userId: user._id,
      consultantId: consultant._id,
    });
  } catch (error) {
    // Clean up uploaded files if error occurs
    if (req.files?.profilePhoto) {
      await deleteFromCloudinary(req.files.profilePhoto[0].publicId);
    }
    if (req.files?.resume) {
      await deleteFromCloudinary(req.files.resume[0].publicId);
    }
    if (req.files?.certifications) {
      for (const file of req.files.certifications) {
        await deleteFromCloudinary(file.publicId);
      }
    }
    next(error);
  }
};

// @desc    Login user
// @route   POST /api/auth/login
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    if (!user.isVerified) {
      return res.status(401).json({
        message:
          "Email not verified. Please check your email for verification link.",
        userId: user._id,
      });
    }

    // For consultants, check if their profile is approved
    if (user.role === "consultant") {
      const consultant = await Consultant.findOne({ user: user._id });
      if (!consultant || consultant.status !== "approved") {
        return res.status(403).json({
          message: "Your consultant profile is under review or rejected",
        });
      }
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
      profilePhoto: user.profilePhoto?.url,
    });
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
