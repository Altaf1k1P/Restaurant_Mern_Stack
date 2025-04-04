import mongoose, {Schema} from "mongoose";

// Food Schema
const FoodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String, enum: ["starter", "main course", "dessert", "beverage"], required: true },
    isAvailable: { type: Boolean, default: true },
    featuredImgUrl: { type: String }, // Store image URL
    addedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
  }, { timestamps: true });

export const Food = mongoose.model('Food', FoodSchema);