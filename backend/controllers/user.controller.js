import User from "../models/User.js";
import Consultant from "../models/Consultant.js";
import { notFoundError } from "../utils/helpers.js";

// @desc    Get user profile
// @route   GET /api/users/profile
export const getUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).select("-password");

    if (!user) {
      return notFoundError("User not found", res);
    }

    let profile = { ...user._doc };

    if (user.role === "consultant") {
      const consultantProfile = await Consultant.findOne({ user: user._id });
      profile = { ...profile, ...consultantProfile?._doc };
    }

    res.json(profile);
  } catch (error) {
    next(error);
  }
};

// @desc    Update user profile
// @route   PUT /api/users/profile
export const updateUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return notFoundError("User not found", res);
    }

    const { name, email, password } = req.body;

    if (name) user.name = name;
    if (email) user.email = email;
    if (password) user.password = password;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
      isVerified: updatedUser.isVerified,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all consultants (admin only)
// @route   GET /api/users/consultants
export const getConsultants = async (req, res, next) => {
  try {
    const consultants = await Consultant.find({ status: "approved" })
      .populate("user", "name email profilePhoto")
      .select("-certifications -resume");

    res.json(consultants);
  } catch (error) {
    next(error);
  }
};

// @desc    Get consultant by ID
// @route   GET /api/users/consultants/:id
export const getConsultantById = async (req, res, next) => {
  try {
    const consultant = await Consultant.findById(req.params.id)
      .populate("user", "name email profilePhoto")
      .populate("reviews");

    if (!consultant) {
      return notFoundError("Consultant not found", res);
    }

    res.json(consultant);
  } catch (error) {
    next(error);
  }
};
