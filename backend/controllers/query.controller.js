import Query from "../models/Query.js";
import Consultant from "../models/Consultant.js";
import Session from "../models/Session.js";
import { notFoundError } from "../utils/helpers.js";
import { uploadToCloudinary } from "../config/cloudinary.js";

// Get consultant queries
export const getConsultantQueries = async (req, res, next) => {
  try {
    const { status } = req.query;
    const filter = { consultant: req.user.consultantProfile };

    if (status) {
      filter.status = status;
    }

    const queries = await Query.find(filter)
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.json(queries);
  } catch (error) {
    next(error);
  }
};

// Create new query
export const createQuery = async (req, res, next) => {
  try {
    const { consultantId, queryText, communicationMethod } = req.body;
    const userId = req.user._id;

    // Get consultant fee
    const consultant = await Consultant.findById(consultantId);
    if (!consultant) {
      return res.status(404).json({ message: "Consultant not found" });
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

    const query = await Query.create({
      user: userId,
      consultant: consultantId,
      queryText,
      files,
      communicationMethod,
      fee: consultant.expectedFee,
    });

    res.status(201).json({
      message: "Query submitted successfully",
      queryId: query._id,
      paymentRequired: true,
      amount: consultant.expectedFee,
    });
  } catch (error) {
    next(error);
  }
};

// Update query status
export const updateQueryStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, date, duration, type } = req.body;

    const query = await Query.findById(id).populate(
      "consultant",
      "expectedFee"
    );

    if (!query) {
      return notFoundError("Query not found", res);
    }

    query.status = status;

    if (status === "accepted") {
      const session = new Session({
        consultant: query.consultant._id,
        user: query.user,
        date,
        duration,
        type,
        fee: query.consultant.expectedFee,
        status: "scheduled",
      });

      await session.save();

      query.session = session._id;
    }

    await query.save();

    res.json(query);
  } catch (error) {
    next(error);
  }
};
