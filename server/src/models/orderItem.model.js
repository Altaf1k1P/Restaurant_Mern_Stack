import mongoose,{ Schema } from "mongoose";

const orderItemSchema = new mongoose.Schema({
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
    foodId: { type: mongoose.Schema.Types.ObjectId, ref: "Food", required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }, // Snapshot price
  }, { timestamps: true });

export const OrderItem = mongoose.model("OrderItem", orderItemSchema);