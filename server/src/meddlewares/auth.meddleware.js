import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js';

export const verifyJWT = async (req, res, next) => {
  try {
    // const authHeader = req.header("Authorization");
    // const token = authHeader?.replace("Bearer ", "") || req.cookies?.accessToken;
    const token = req.cookies?.accessToken;
  
     console.log("Raw token received in request:", token);


    if (!token) {
      return res.status(401).json({
        status: "error",
        message: "Access token is missing. Please log in.",
      });
    }
    
    //console.log(process.env.ACCESS_TOKEN_SECRET)

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    console.log("Decoded token:", decodedToken); // 👈 Add this

    if (!decodedToken || !decodedToken._id) {
      return res.status(401).json({
        status: "error",
        message: "Invalid access token.",
      });
    }
    


    const user = await User.findById(decodedToken._id).select("-password -refreshToken");
    if (!user) {
      return res.status(401).json({
        status: "error",
        message: "User not found. Please log in again.",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        status: "error",
        message: "Access token expired. Please refresh your session.",
      });
    }
    return res.status(401).json({
      status: "error",
      message: error.message || "Invalid access token.",
    });
  }
};