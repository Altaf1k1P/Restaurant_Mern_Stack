import mongoose, {Schema} from "mongoose";

// Food Schema
const FoodSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, enum: ["Indian", "main course", "dessert", "beverage", "Asian","Fast Food","Italian","Salad"], required: true },
    //category: { type: String, required: true },
    isAvailable: { type: Boolean, default: true },
    featuredImgUrl: { type: String }, // Store image URL
  }, { timestamps: true });

export const Food = mongoose.model('Food', FoodSchema);