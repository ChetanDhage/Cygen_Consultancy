import Consultant from "../models/Consultant.js";

export const getProfile = async (req, res) => {
  try {
    const consultant = await Consultant.findById(req.params.id);
    if (!consultant) {
      return res.status(404).json({ error: "Consultant not found" });
    }
    res.json(consultant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const updates = Object.keys(req.body);
    const allowedUpdates = [
      "fullName",
      "contactNumber",
      "location",
      "designation",
      "currentCompany",
      "industry",
      "skills",
      "languages",
      "fee",
      "about",
      "availability",
    ];

    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    );

    if (!isValidOperation) {
      return res.status(400).json({ error: "Invalid updates!" });
    }

    const consultant = await Consultant.findById(req.params.id);

    if (!consultant) {
      return res.status(404).json({ error: "Consultant not found" });
    }

    updates.forEach((update) => (consultant[update] = req.body[update]));
    await consultant.save();

    res.json(consultant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateCertifications = async (req, res) => {
  try {
    const consultant = await Consultant.findById(req.params.id);

    if (!consultant) {
      return res.status(404).json({ error: "Consultant not found" });
    }

    consultant.certifications = req.body.certifications;
    await consultant.save();

    res.json(consultant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateAvailability = async (req, res) => {
  try {
    const consultant = await Consultant.findById(req.params.id);

    if (!consultant) {
      return res.status(404).json({ error: "Consultant not found" });
    }

    consultant.availability = req.body.availability;
    await consultant.save();

    res.json(consultant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
