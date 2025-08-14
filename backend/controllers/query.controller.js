import Query from "../models/Query.js";
import Consultant from "../models/Consultant.js";
import Session from "../models/Session.js";
import { notFoundError } from "../utils/helpers.js";
import { uploadToCloudinary } from "../config/cloudinary.js";

// Get consultant queries with pagination and status filtering

// ✅ Get consultant queries by consultant ID
export const getConsultantQueries = async (req, res, next) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;

    // Use consultantProfile ID from authenticated user
    const filter = { consultant: req.user.consultantProfile };

    if (status && status !== "all") {
      filter.status = status;
    }

    const startIndex = (page - 1) * limit;
    const total = await Query.countDocuments(filter);

    const queries = await Query.find(filter)
      .populate("user", "name email")
      .sort({ createdAt: -1 })
      .skip(startIndex)
      .limit(limit);

    res.json({
      queries,
      currentPage: Number(page),
      totalPages: Math.ceil(total / limit),
      totalQueries: total,
    });
  } catch (error) {
    next(error);
  }
};



// Create query with WebSocket notification
export const createQuery = async (req, res, next) => {
  try {
    const { consultantId, querySub, queryText } = req.body;
    const userId = req.user._id;

    const consultant = await Consultant.findById(consultantId);
    if (!consultant) {
      return res.status(404).json({ message: "Consultant not found" });
    }

    const files = [];
    if (req.files?.length) {
      for (const file of req.files) {
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
      querySub,
      queryText,
      files,
      fee: consultant.expectedFee,
    });

    // Emit new query event to consultant's room
    const io = req.app.get("socketio");
    io.to(`consultant_${consultantId}`).emit("new-query", query);

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

// Update query status with WebSocket notification
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
        consultant: Query.consultant._id,
        customer: Query.user, // Changed from 'user' to 'customer'
        date,
        duration,
        type,
        fee: Query.consultant.expectedFee,
        status: "scheduled",
        query: Query._id, // Link session to query
      });

      await session.save();
      Query.session = session._id;
    }
    const updatedQuery = await query.save();

    // Emit status update to consultant's room
    const io = req.app.get("socketio");
    io.to(`consultant_${query.consultant._id}`).emit(
      "update-query",
      updatedQuery
    );

    res.json(updatedQuery);
  } catch (error) {
    next(error);
  }
  
  
};

// Get single query by ID
export const getQueryById = async (req, res, next) => {
  try {
    const query = await Query.findById(req.params.id)
      .populate("user", "name email")
      .populate("consultant", "expectedFee");

    if (!query) {
      return notFoundError("Query not found", res);
    }

    res.json(query);
  } catch (error) {
    next(error);
  }
};
