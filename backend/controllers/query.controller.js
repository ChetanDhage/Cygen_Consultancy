import Query from "../models/Query.js";

export const getQueries = async (req, res) => {
  try {
    const queries = await Query.find({ consultantId: req.consultant._id }).sort(
      { createdAt: -1 }
    );

    res.json(queries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getQueryDetails = async (req, res) => {
  try {
    const query = await Query.findById(req.params.id);

    if (!query) {
      return res.status(404).json({ error: "Query not found" });
    }

    res.json(query);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateQueryStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const query = await Query.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!query) {
      return res.status(404).json({ error: "Query not found" });
    }

    res.json(query);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
