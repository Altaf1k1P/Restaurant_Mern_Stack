import { Admin } from "../models/admin.model.js";
import { Food } from "../models/Food.model.js"

//admin login, add food, get all food, get food by id, update food, delete food 

const adminLogin = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });

        }
        if (password.length < 6) {
            return res.status(400).json({ error: "Password must be at least 6 characters long" });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        const admin = new Admin.create({ name, email, password });
        await admin.save();
        return res.status(201).json({ message: "Admin created successfully", admin });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

const addFood = async (req, res) => {
    const { name, price, category, description} = req.body;
    try {
        if (!name || !price || !category || !description) {
            return res.status(400).json({ message: "All fields are required" });
        }
        if (price <= 0) {
            return res.status(400).json({ error: "Price must be greater than 0" });
        }
        let featuredImgUrl = null;
        if (req.files?.featuredImg) {
            const file = req.files.featuredImg[0];
            const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

            if (!allowedTypes.includes(file.mimetype)) {
                throw new ApiError(400, "Unsupported file format. Only JPEG, PNG, and WebP are allowed.");
            }

            const uploadedImage = await uploadOnCloudinary(file.path);
            if (!uploadedImage) {
                throw new ApiError(500, "Image upload failed. Please try again.");
            }

            featuredImgUrl = uploadedImage.url;
        }

        const food = new Food.create({ name, price, category, description, isAvailable, featuredImgUrl });
        await food.save();
        return res.status(201).json({ message: "Food created successfully", food });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const addPost = asyncHandler(async (req, res) => {
    const { title, content, tags, isPublished } = req.body;

    if (!title || !content) {
        throw new ApiError(400, "Title and content are required to create a post");
    }

    let featuredImgUrl = null;
    if (req.files?.featuredImg) {
        const file = req.files.featuredImg[0];
        const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

        if (!allowedTypes.includes(file.mimetype)) {
            throw new ApiError(400, "Unsupported file format. Only JPEG, PNG, and WebP are allowed.");
        }

        const uploadedImage = await uploadOnCloudinary(file.path);
        if (!uploadedImage) {
            throw new ApiError(500, "Image upload failed. Please try again.");
        }

        featuredImgUrl = uploadedImage.url;
    }

    const post = await Post.create({
        title,
        content,
        tags: Array.isArray(tags)
            ? tags.flatMap((tag) => tag.split(" ").map((t) => t.trim()).filter(Boolean))
            : [],
        featuredImg: featuredImgUrl,
        owner: req.user._id,
        isPublished: isPublished || false,
    });

    res.status(201).json(new ApiResponse(201, post, "Post created successfully"));
});

const getAllFood = async (req, res) => {
    try {
        const { page = 1, limit = 10, category, minPrice, maxPrice, isAvailable, sortBy = "createdAt", order = "desc" } = req.query;

        const filter = {};
        if (category) filter.category = category;
        if (isAvailable !== undefined) filter.isAvailable = isAvailable === "true";
        if (minPrice) filter.price = { ...filter.price, $gte: Number(minPrice) };
        if (maxPrice) filter.price = { ...filter.price, $lte: Number(maxPrice) };

        const food = await Food.find(filter)
            .sort({ [sortBy]: order === "desc" ? -1 : 1 }) // Sort by any field (default: latest)
            .skip((page - 1) * limit) // Skip for pagination
            .limit(Number(limit)) // Limit results per page
            .select("name price category isAvailable featuredImgUrl"); // Return only necessary fields

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
        const { id } = req.params;

        // Validate MongoDB ObjectId before querying
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid food ID format" });
        }

        // Find food item by ID with selected fields
        const food = await Food.findById(id)
            .select("name price category isAvailable featuredImgUrl");

        if (!food) {
            return res.status(404).json({ message: "Food not found" });
        }

        return res.status(200).json(food);
    } catch (error) {
        return res.status(500).json({ message: "Server error, please try again later" });
    }
};

const updateFood = async (req, res) => {
    try {
        const { id } = req.params;
        const { price, isAvailable } = req.body;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid food ID format" });
        }
        const food = await Food.findByIdAndUpdate(id, { price, isAvailable }, { new: true });
        if (!food) {
            return res.status(404).json({ message: "Food not found" });
        }
        return res.status(200).json(food);
        } catch (error) {
        return res.status(500).json({ message: "Server error, please try again later" });
    }
}


export {adminLogin, addFood, getAllFood, getFoodById, updateFood}