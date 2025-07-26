import Query from "../models/Query.js";
import Session from "../models/Session.js";
import { notFoundError } from "../utils/helpers.js";

// Get consultant queries
export const getConsultantQueries = async (req, res, next) => {
  try {
    const { status } = req.query;
    const filter = { consultant: req.user._id };

    if (status) {
      filter.status = status;
    }

    const queries = await Query.find(filter)
      .populate("customer", "name email")
      .sort({ createdAt: -1 });

    res.json(queries);
  } catch (error) {
    next(error);
  }
};

// Update query status
export const updateQueryStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, fee, date, duration, type } = req.body;

    const query = await Query.findById(id);
    if (!query) {
      return notFoundError("Query not found", res);
    }

    query.status = status;

    if (status === "accepted") {
      const session = new Session({
        consultant: query.consultant,
        customer: query.customer,
        date,
        duration,
        type,
        fee,
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
