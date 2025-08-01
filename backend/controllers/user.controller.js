import User from "../models/User.js";
import Consultant from "../models/Consultant.js";
import Verification from "../models/Verification.js";
import Session from "../models/Session.js";
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

      const verification = await Verification.findOne({ consultant: user._id });
      profile.verificationStatus = verification?.status || "not-submitted";
    }

    if (user.role === "sub-admin") {
      const pendingVerifications = await Verification.countDocuments({
        status: "pending",
        domain: user.domain,
      });

      const activeSessions = await Session.countDocuments({
        status: "active",
        domain: user.domain,
      });

      profile.domainStats = {
        pendingVerifications,
        activeSessions,
      };
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

    const {
      name,
      email,
      password,
      bio,
      contactNumber,
      linkedInProfile,
      location,
    } = req.body;

    if (name) user.name = name;
    if (email) user.email = email;
    if (password) user.password = password;
    if (bio) user.bio = bio;
    if (contactNumber) user.contactNumber = contactNumber;
    if (linkedInProfile) user.linkedInProfile = linkedInProfile;
    if (location) user.location = location;

    const updatedUser = await user.save();

    const response = {
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
      isVerified: updatedUser.isVerified,
    };

    if (updatedUser.role === "consultant") {
      const consultantProfile = await Consultant.findOne({
        user: updatedUser._id,
      });
      if (consultantProfile) {
        response.specializations = consultantProfile.skills;
        response.yearsOfExperience = consultantProfile.yearsOfExperience;
      }
    }

    if (updatedUser.role === "sub-admin") {
      response.domain = updatedUser.domain;
      response.bio = updatedUser.bio;
    }

    res.json(response);
  } catch (error) {
    next(error);
  }
};

// @desc    Get all consultants
// @route   GET /api/users/consultants
export const getConsultants = async (req, res, next) => {
  try {
    const filter = { status: "approved" };
    if (req.user.role === "sub-admin" && req.user.domain) {
      filter.domain = req.user.domain;
    }

    const consultants = await Consultant.find(filter)
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

    if (req.user.role === "sub-admin" && req.user.domain) {
      if (consultant.domain !== req.user.domain) {
        return res.status(403).json({
          message: "Not authorized to access this consultant",
        });
      }
    }

    res.json(consultant);
  } catch (error) {
    next(error);
  }
};

// @desc    Get consultants by domain (sub-admin only)
// @route   GET /api/users/consultants/domain/:domain
export const getConsultantsByDomain = async (req, res, next) => {
  try {
    if (req.user.role !== "sub-admin") {
      return res.status(403).json({
        message: "Not authorized to filter by domain",
      });
    }

    if (req.params.domain !== req.user.domain) {
      return res.status(403).json({
        message: "Not authorized to access this domain",
      });
    }

    const consultants = await Consultant.find({
      status: "approved",
      domain: req.params.domain,
    })
      .populate("user", "name email profilePhoto")
      .select("-certifications -resume");

    res.json(consultants);
  } catch (error) {
    next(error);
  }
};
