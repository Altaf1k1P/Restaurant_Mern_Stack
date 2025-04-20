import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

// User Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { 
      type: String,
    require: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^\d{10}$/.test(v); // ensures exactly 10 digits
      },
      message: props => `${props.value} is not a valid 10-digit phone number!`
    }    },
  }, { timestamps: true });

  // Hash the password before saving to the database
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);  // Create salt with 10 rounds
    this.password = await bcrypt.hash(this.password, salt);  // Hash the password
  }
  next();
});

// Add method to check if entered password matches the hashed password
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);  // Compare hashed password
};

// Generate access token
userSchema.methods.generateAccessToken = async function () {
  return jwt.sign({
      _id: this._id,
      phone: this.phone,
      email: this.email
  },
  process.env.ACCESS_TOKEN_SECRET,
  {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY
  });
};

// Generate refresh token
userSchema.methods.generateRefreshToken = async function () {
  return jwt.sign({
      _id: this._id,

  },
  process.env.REFRESH_TOKEN_SECRET,
  {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY
  });
};



export const User = mongoose.model('User', userSchema);