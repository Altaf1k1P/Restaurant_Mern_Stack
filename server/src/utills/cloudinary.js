import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Upload File to Cloudinary
const uploadOnCloudinary = async (localFilePath) => {
  console.log(localFilePath);
  
  if (!localFilePath) return null;

  try {
    const response = await cloudinary.uploader.upload(localFilePath, {
      folder: "blog_images",
      resource_type: "image",
      format: "webp", // Automatically determine the format
      quality: "auto:good", // Automatically adjust quality to reduce size
      width: 800, // Resize to a maximum width of 800px
      crop: "scale",
    });
    console.log("response:", response);
    
    fs.unlinkSync(localFilePath);
    return { url: response.secure_url, public_id: response.public_id };
  } catch (error) {
    fs.unlinkSync(localFilePath);
    console.error(`Cloudinary Upload Error: ${error.message}`);
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
