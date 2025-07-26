import Document from "../models/Document.js";
import {
  uploadToCloudinary,
  deleteFromCloudinary,
} from "../config/cloudinary.js";
import { notFoundError } from "../utils/helpers.js";

// @desc    Upload a document
// @route   POST /api/documents
export const uploadDocument = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const result = await uploadToCloudinary(req.file.path);

    const document = new Document({
      user: req.user._id,
      name: req.file.originalname,
      fileUrl: result.secure_url,
      publicId: result.public_id,
      size: req.file.size,
      fileType: req.file.mimetype,
    });

    await document.save();

    res.status(201).json(document);
  } catch (error) {
    next(error);
  }
};

// @desc    Get all documents for a user
// @route   GET /api/documents
export const getDocuments = async (req, res, next) => {
  try {
    const documents = await Document.find({ user: req.user._id });
    res.json(documents);
  } catch (error) {
    next(error);
  }
};

// @desc    Download a document
// @route   GET /api/documents/:id/download
export const downloadDocument = async (req, res, next) => {
  try {
    const document = await Document.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!document) {
      return notFoundError("Document not found", res);
    }

    res.redirect(document.fileUrl);
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a document
// @route   DELETE /api/documents/:id
export const deleteDocument = async (req, res, next) => {
  try {
    const document = await Document.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!document) {
      return notFoundError("Document not found", res);
    }

    // Delete from Cloudinary
    await deleteFromCloudinary(document.publicId);

    res.json({ message: "Document deleted successfully" });
  } catch (error) {
    next(error);
  }
};
