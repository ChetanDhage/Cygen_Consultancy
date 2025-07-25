import { uploadToCloudinary } from "../config/cloudinary.js";
import Consultant from "../models/Consultant.js";

export const uploadDocument = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const result = await uploadToCloudinary(
      req.file.buffer,
      `consultants/${req.user.id}/documents`
    );

    const consultant = await Consultant.findOneAndUpdate(
      { userId: req.user.id },
      { $push: { documents: result.secure_url } },
      { new: true }
    );

    res.json({
      url: result.secure_url,
      documents: consultant.documents,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
