import { isValidObjectId } from "mongoose";
import { Food } from "../models/Food.model.js"
import {uploadOnCloudinary, deleteFromCloudinary} from "../utills/cloudinary.js";



const addFood = async (req, res) => {
    const { name, price, category, description, isAvailable} = req.body;
    try {
        if (!name || !price || !category || !description) {
            return res.status(400).json({ message: "All fields are required" });
        }
        if (price <= 0) {
            return res.status(400).json({ error: "Price must be greater than 0" });
        }
        let featuredImgUrl = null;
        console.log("image",featuredImgUrl);
        if (req.files?.featuredImgUrl) {
            const file = req.files.featuredImgUrl[0];
            console.log(file);
            
            const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

            if (!allowedTypes.includes(file.mimetype)) {
                return res.status(404).json({message:"Unsupported file format. Only JPEG, PNG, and WebP are allowed."});
            }

            const uploadedImage = await uploadOnCloudinary(file.path);
            console.log(uploadedImage);
            
            if (!uploadedImage) {
                return res.status(500).json({message: "Image upload failed. Please try again."});
            }

            featuredImgUrl = uploadedImage.url;
        }

        const food = await Food.create({ name, price, category, description, isAvailable, featuredImgUrl });
        return res.status(201).json({ message: "Food created successfully", food });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const getAllFoodItem = async (req, res) => {
    try {
        const { page = 1, limit = 10, category, minPrice, maxPrice, isAvailable, sortBy = "createdAt", order = "desc" } = req.query;

        const filter = {};
        if (category) {
            const categories = category.split(",");
            if (categories.length > 1) {
              // Multiple categories (exact match for any of them)
              filter.category = { $in: categories };
            } else {
              // Single category — use regex for partial, case-insensitive match
              filter.category = { $regex: category, $options: "i" };
            }
          }
        if (isAvailable !== undefined) filter.isAvailable = isAvailable === "true"; 
        if (minPrice) filter.price = { ...filter.price, $gte: Number(minPrice) };
        if (maxPrice) filter.price = { ...filter.price, $lte: Number(maxPrice) };

        const food = await Food.find(filter)
            .sort({ [sortBy]: order === "desc" ? -1 : 1 }) // Sort by any field (default: latest)
            .skip((page - 1) * limit) // Skip for pagination
            .limit(Number(limit)) // Limit results per page
            .select("name price category isAvailable featuredImgUrl description"); // Return only necessary fields

        const totalCount = await Food.countDocuments(filter); // Get total count of filtered items

        return res.status(200).json({
            food,
            currentPage: Number(page),
            totalPages: Math.ceil(totalCount / limit),
            totalCount,
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getFoodById = async (req, res) => {
    try {
        const { foodId } = req.params;

        // Validate MongoDB ObjectId before querying
        if (!isValidObjectId(foodId)) {
            return res.status(400).json({ message: "Invalid food ID format" });
        }

        // Find food item by ID with selected fields
        const food = await Food.findById(foodId)
            .select("name price category isAvailable featuredImgUrl");

        if (!food) {
            return res.status(404).json({ message: "Food not found" });
        }

        return res.status(200).json(food);
    } catch (error) {
        return res.status(500).json({ message: "Server error, please try again later" });
    }
};

const updateFoodItem = async (req, res) => {
    try {
        const { foodId } = req.params;
        const { price, isAvailable } = req.body;
        if (!isValidObjectId(foodId)) {
            return res.status(400).json({ message: "Invalid food ID format" });
        }
        const food = await Food.findByIdAndUpdate(foodId, { price, isAvailable }, { new: true });
        if (!food) {
            return res.status(404).json({ message: "Food not found" });
        }
        return res.status(200).json({message:"foodItem Update successfully!!",food});
        } catch (error) {
        return res.status(500).json({ message: "Server error, please try again later" });
    }
}

const deleteFoodItem = async(req, res)=>{

    try {
        const {foodId} = req.params;
  if(!isValidObjectId(foodId)){
    return res.status(400).json({message:"id is missing"})
  }
  const food = Food.findById(foodId);

  if (food.featuredImgUrl) {
    const publicId = food.featuredImgUrl.split("/").pop().split(".")[0];
    await deleteFromCloudinary(publicId);
  }
  await Food.findByIdAndDelete(foodId)

  return res.status(200).json({message:"foodItem deleted successfully!!"})
    } catch (error) {
        return res.status(500).json({ message: "Server error, please try again later" });  
    }
}

// const deleteALLFoodItem = async(req, res)=>{
//     try {
//         const food = await Food.find({});
//         food.forEach(async (item) => {
//             if (item.featuredImgUrl) {
//                 const publicId = item.featuredImgUrl.split("/").pop().split(".")[0];
//                 await deleteFromCloudinary(publicId);
//             }
//         });
//         await Food.deleteMany({});
//         return res.status(200).json({message:"All food items deleted successfully!!"})
//     } catch (error) {
//         return res.status(500).json({ message: "Server error, please try again later" });  
//     }
// }

export { addFood, getAllFoodItem, getFoodById, updateFoodItem, deleteFoodItem };