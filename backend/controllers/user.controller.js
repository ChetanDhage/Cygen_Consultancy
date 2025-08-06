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
// Get all consultants with filtering
export const getConsultants = async (req, res, next) => {
  try {
    const { domain, minExperience, maxExperience, minFee, maxFee, minRating, search } = req.query;
    
    const filter = { status: "approved" };
    
    // Domain filter
    if (domain) {
      filter.skills = domain;
    }
    
    // Experience filter
    if (minExperience || maxExperience) {
      filter.yearsOfExperience = {};
      if (minExperience) filter.yearsOfExperience.$gte = minExperience;
      if (maxExperience) filter.yearsOfExperience.$lte = maxExperience;
    }
    
    // Fee filter
    if (minFee || maxFee) {
      filter.expectedFee = {};
      if (minFee) filter.expectedFee.$gte = minFee;
      if (maxFee) filter.expectedFee.$lte = maxFee;
    }
    
    // Rating filter
    if (minRating) {
      filter.rating = { $gte: minRating };
    }
    
    // Search filter
    if (search) {
      const searchRegex = new RegExp(search, 'i');
      filter.$or = [
        { name: searchRegex },
        { skills: searchRegex },
        { company: searchRegex },
        { designation: searchRegex },
      ];
    }

    const consultants = await Consultant.find(filter)
      .populate("user", "name email profilePhoto")
      .select("-certifications -resume");

    res.json(consultants);
  } catch (error) {
    next(error);
  }
};

// Get consultant by ID
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