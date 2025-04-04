import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Upload File to Cloudinary (Convert to WebP & Compress)
const uploadOnCloudinary = async (localFilePath) => {
  if (!localFilePath) return null;

  try {
    const response = await cloudinary.uploader.upload(localFilePath, {
      folder: "blog_images",
      resource_type: "image",
      format: "webp",  // Convert to WebP
      quality: "auto:good", // Auto optimize with good quality
      width: 800, // Resize to a max width of 800px
      crop: "scale",
    });

    // Remove local file after successful upload
    fs.unlinkSync(localFilePath);
    return { url: response.secure_url, public_id: response.public_id };
  } catch (error) {
    console.error(`Cloudinary Upload Error: ${error.message}`);
    
    // Ensure local file is deleted even on failure
    try {
      fs.unlinkSync(localFilePath);
    } catch (unlinkError) {
      console.error(`Failed to delete local file: ${unlinkError.message}`);
    }
    
    return null;
  }
};

// Delete File from Cloudinary
const deleteFromCloudinary = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error(`Cloudinary Deletion Error: ${error.message}`);
  }
};

export { uploadOnCloudinary, deleteFromCloudinary };
