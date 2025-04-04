import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
        {
            foodId: { type: mongoose.Schema.Types.ObjectId, ref: "Food" },
            quantity: { type: Number, required: true },
        }
    ],
    totalAmount: { type: Number, required: true },
    status: {
        type: String,
        enum: ["pending", "preparing", "out for delivery", "delivered", "canceled"],
        default: "pending"
    },
    paymentStatus: { type: String, enum: ["paid", "unpaid"], default: "unpaid" }
}, { timestamps: true });

export const Order = mongoose.model("Order", orderSchema);
