import mongoose,{Schema} from "mongoose";

// Admin Schema
const AdminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin"], default: "admin" },
  }, { timestamps: true });

export const Admin = mongoose.model('Admin', AdminSchema);