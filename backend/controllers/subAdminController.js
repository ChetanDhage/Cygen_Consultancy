import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import Verification from "../models/Verification.js";
import Session from "../models/Session.js";

// @desc    Get dashboard overview
// @route   GET /api/subadmin/dashboard
// @access  Private/SubAdmin
export const getDashboardOverview = asyncHandler(async (req, res) => {
  // Get pending verifications
  const pendingVerifications = await Verification.countDocuments({
    status: "pending",
  });

  // Get active sessions
  const activeSessions = await Session.countDocuments({ status: "active" });

  // Get flagged content (sessions)
  const flaggedContent = await Session.countDocuments({ status: "flagged" });

  // Get pending consultant verifications
  const pendingConsultants = await Verification.find({ status: "pending" })
    .populate("consultant", "name email")
    .limit(5);

  // Get active sessions by domain
  const activeSessionsByDomain = await Session.aggregate([
    { $match: { status: "active" } },
    { $group: { _id: "$domain", count: { $sum: 1 } } },
  ]);

  res.json({
    pendingVerifications,
    activeSessions,
    flaggedContent,
    pendingConsultants: pendingConsultants.map((v) => ({
      name: v.consultant.name,
      specialization: v.consultant.skills?.join(", ") || "",
      experience: v.consultant.yearsOfExperience || 0,
      submitted: v.createdAt,
      status: v.status,
    })),
    activeSessionsByDomain,
  });
});

// @desc    Get pending consultant verifications
// @route   GET /api/subadmin/verifications
// @access  Private/SubAdmin
export const getPendingVerifications = asyncHandler(async (req, res) => {
  const verifications = await Verification.find({ status: "pending" })
    .populate({
      path: "consultant",
      select:
        "name email contactNumber location yearsOfExperience skills certifications",
    })
    .sort({ createdAt: -1 });

  res.json(verifications);
});

// @desc    Review consultant verification
// @route   PUT /api/subadmin/verifications/:id
// @access  Private/SubAdmin
export const reviewVerification = asyncHandler(async (req, res) => {
  const { decision, comments } = req.body;
  const verification = await Verification.findById(req.params.id);

  if (!verification) {
    res.status(404);
    throw new Error("Verification not found");
  }

  verification.status =
    decision === "approve"
      ? "recommended"
      : decision === "reject"
      ? "rejected"
      : "changes-requested";

  verification.subAdminReview = {
    subAdmin: req.user._id,
    comments,
    decision,
    date: new Date(),
  };

  await verification.save();

  res.json({ message: "Verification reviewed successfully" });
});

// @desc    Get flagged sessions for moderation
// @route   GET /api/subadmin/moderations
// @access  Private/SubAdmin
export const getFlaggedSessions = asyncHandler(async (req, res) => {
  const sessions = await Session.find({ status: "flagged" })
    .populate("consultant", "name")
    .populate("client", "name")
    .sort({ createdAt: -1 });

  res.json(sessions);
});

// @desc    Review flagged session
// @route   PUT /api/subadmin/moderations/:id
// @access  Private/SubAdmin
export const reviewFlaggedSession = asyncHandler(async (req, res) => {
  const { action } = req.body;
  const session = await Session.findById(req.params.id);

  if (!session) {
    res.status(404);
    throw new Error("Session not found");
  }

  if (action === "dismiss") {
    session.status = "completed";
  } else if (action === "escalate") {
    session.status = "escalated";
  }

  await session.save();

  res.json({ message: "Session review completed" });
});

// @desc    Get domain analytics
// @route   GET /api/subadmin/analytics
// @access  Private/SubAdmin
export const getDomainAnalytics = asyncHandler(async (req, res) => {
  const domain = req.user.domain; // Assuming sub-admin has a domain field

  // Total sessions in domain
  const totalSessions = await Session.countDocuments({ domain });

  // Average rating in domain
  const avgRating = await Session.aggregate([
    { $match: { domain, rating: { $exists: true } } },
    { $group: { _id: null, avgRating: { $avg: "$rating" } } },
  ]);

  // Active consultants in domain
  const activeConsultants = await User.countDocuments({
    role: "consultant",
    domain,
    status: "active",
  });

  // Resolution rate in domain
  const resolvedSessions = await Session.countDocuments({
    domain,
    status: "completed",
  });
  const resolutionRate =
    totalSessions > 0 ? (resolvedSessions / totalSessions) * 100 : 0;

  // Recent feedback
  const recentFeedback = await Session.find({
    domain,
    feedback: { $exists: true },
  })
    .sort({ createdAt: -1 })
    .limit(5)
    .select("feedback rating createdAt");

  res.json({
    totalSessions,
    avgRating: avgRating.length > 0 ? avgRating[0].avgRating : 0,
    activeConsultants,
    resolutionRate,
    recentFeedback,
  });
});

// @desc    Update sub-admin profile
// @route   PUT /api/subadmin/profile
// @access  Private/SubAdmin
export const updateSubAdminProfile = asyncHandler(async (req, res) => {
  const { name, email, phone, bio } = req.body;
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = name || user.name;
    user.email = email || user.email;
    user.contactNumber = phone || user.contactNumber;
    user.bio = bio || user.bio;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      contactNumber: updatedUser.contactNumber,
      bio: updatedUser.bio,
      domain: updatedUser.domain,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});
