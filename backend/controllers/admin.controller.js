import User from "../models/User.js";
import Consultant from "../models/Consultant.js";
import Verification from "../models/Verification.js";
import Transaction from "../models/Transaction.js";
import {
  CONSULTANT_STATUS,
  VERIFICATION_STATUS,
  TRANSACTION_STATUS,
} from "../config/constants.js";
import { getAnalyticsData } from "../utils/analytics.js";

// Get all consultants with filtering
export const getConsultants = async (req, res) => {
  try {
    const { status, search } = req.query;
    const filter = {};

    if (status && status !== "All") {
      filter.status = status;
    }

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ];
    }

    const consultants = await Consultant.find(filter)
      .populate("consultant", "name email profilePhoto")
      .sort({ createdAt: -1 });

    res.json(consultants);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getConsultantsByStatus = async ( req, res) => {

   try {
    const consultants = await Consultant.find({ status: 'approved' });

    if (!consultants.length) {
      return res.status(404).json({ message: `No consultants with status: approved` });
    }

    res.status(200).json(consultants);
  } catch (error) {
    console.error('Error fetching consultants by status:', error);
    res.status(500).json({ message: 'Server error' });
  }
}

// Update consultant status
export const updateConsultantStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, rejectionReason } = req.body;

    const consultant = await Consultant.findById(id).populate("user");

    if (!consultant) {
      return res.status(404).json({ message: "Consultant not found" });
    }

    consultant.status = status;
    if (status === CONSULTANT_STATUS.REJECTED && rejectionReason) {
      consultant.rejectionReason = rejectionReason;
    }

    await consultant.save();

    // Update verification status if approved
    if (status === CONSULTANT_STATUS.APPROVED) {
      await Verification.findOneAndUpdate(
        { consultant: consultant.user._id },
        { status: VERIFICATION_STATUS.VERIFIED },
        { new: true }
      );
    }

    res.json(consultant);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get all customers
export const getCustomers = async (req, res) => {
  try {
    const { status, search } = req.query;
    const filter = { role: "customer" };

    if (status && status !== "All") {
      filter.status = status;
    }

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ];
    }

    const customers = await User.find(filter)
      .select("-password")
      .sort({ createdAt: -1 });

    res.json(customers);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get all transactions
export const getTransactions = async (req, res) => {
  try {
    const { status, search } = req.query;
    const filter = {};

    if (status && status !== "All") {
      filter.status = status;
    }

    if (search) {
      filter.$or = [
        { "customer.name": { $regex: search, $options: "i" } },
        { "consultant.name": { $regex: search, $options: "i" } },
        { transactionId: { $regex: search, $options: "i" } },
      ];
    }

    const transactions = await Transaction.find(filter)
      .populate("customer", "name email")
      .populate("consultant", "name email")
      .populate("session")
      .sort({ createdAt: -1 });

    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get verifications
export const getVerifications = async (req, res) => {
  try {
    const { status, search } = req.query;
    const filter = {};

    if (status && status !== "All") {
      filter.status = status;
    }

    if (search) {
      filter.$or = [
        { "consultant.name": { $regex: search, $options: "i" } },
        { "consultant.email": { $regex: search, $options: "i" } },
      ];
    }

    const verifications = await Verification.find(filter)
      .populate({
        path: "consultant",
        select: "name email",
        populate: {
          path: "consultantProfile",
          select: "specialization",
        },
      })
      .sort({ createdAt: -1 });

    res.json(verifications);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update verification status
export const updateVerificationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, rejectionReason } = req.body;

    const verification = await Verification.findById(id).populate("consultant");

    if (!verification) {
      return res.status(404).json({ message: "Verification not found" });
    }

    verification.status = status;
    verification.reviewedBy = req.user._id;
    verification.reviewDate = new Date();

    if (status === VERIFICATION_STATUS.REJECTED && rejectionReason) {
      verification.rejectionReason = rejectionReason;
    }

    await verification.save();

    // Update consultant status if verified
    if (status === VERIFICATION_STATUS.VERIFIED) {
      await Consultant.findOneAndUpdate(
        { user: verification.consultant._id },
        { status: CONSULTANT_STATUS.APPROVED },
        { new: true }
      );
    }

    res.json(verification);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get analytics data
export const getAnalytics = async (req, res) => {
  try {
    const { range = "7d" } = req.query;

    let startDate = new Date();
    startDate.setHours(0, 0, 0, 0);

    switch (range) {
      case "7d":
        startDate.setDate(startDate.getDate() - 7);
        break;
      case "30d":
        startDate.setDate(startDate.getDate() - 30);
        break;
      case "90d":
        startDate.setDate(startDate.getDate() - 90);
        break;
      default:
        startDate.setDate(startDate.getDate() - 7);
    }

    const endDate = new Date();
    endDate.setHours(23, 59, 59, 999);

    const analyticsData = await getAnalyticsData(startDate, endDate);

    // Calculate summary statistics
    const summary = {
      totalUsers: 0,
      totalConsultants: 0,
      totalCustomers: 0,
      totalRevenue: 0,
      totalSessions: 0,
      userDistribution: {
        consultants: 0,
        customers: 0,
        admins: 0,
      },
    };

    if (analyticsData.length > 0) {
      // Latest data
      const latest = analyticsData[analyticsData.length - 1];

      summary.totalUsers = latest.totalUsers;
      summary.totalConsultants = latest.totalConsultants;
      summary.totalCustomers = latest.totalCustomers;
      summary.totalRevenue = analyticsData.reduce(
        (sum, data) => sum + data.revenue,
        0
      );
      summary.totalSessions = analyticsData.reduce(
        (sum, data) => sum + data.transactions,
        0
      );
      summary.userDistribution = latest.userDistribution;
    }

    res.json({
      summary,
      analytics: analyticsData,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
