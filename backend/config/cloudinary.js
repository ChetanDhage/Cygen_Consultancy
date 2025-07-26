import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.v2.uploader.upload(filePath, {
      resource_type: "auto",
    });
    return result;
  } catch (error) {
    throw new Error(`Cloudinary upload error: ${error.message}`);
  }
};

export const deleteFromCloudinary = async (publicId) => {
  try {
    await cloudinary.v2.uploader.destroy(publicId);
  } catch (error) {
    throw new Error(`Cloudinary delete error: ${error.message}`);
  }
};

export default cloudinary;
