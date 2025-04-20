import {User} from "../models/user.model.js"
import { isValidObjectId } from "mongoose"
import jwt from "jsonwebtoken";



// Generate access and refresh tokens
const genrateAccessAndRefreshToken = async (userId) => {
    console.log("userId:",userId);
    
    try {
        // Ensure the user exists
        const user = await User.findById(userId);
        // console.log("user:",user);
        
        if (!user) {
            throw new ApiError(404, "User not found");
        }

        // Generate tokens
        const accessToken = await user.generateAccessToken();
        const refreshToken = await user.generateRefreshToken();
        
        
        // Save the refresh token to the user document
        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });

        return { accessToken, refreshToken };
    } catch (error) {
        throw new ApiError(500, "Error generating tokens: " + error.message);
    }
};
// signup
const signup = async(req, res)=>{
    const {name, email, phone, password } = req.body;
    try {
        if (!name || !email || !phone || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        if (password.length < 6) {
            return res.status(400).json({ error: "Password must be at least 6 characters long" });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ $or: [{ phone }, { email }] });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }
               
        const user = await User.create({ name, email, phone, password });
        return res.status(201).json({ message: "user created successfully", user });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


// login
const loginUser = async(req, res)=>{
 const {email, phone, password} = req.body;
 try {
    const user = await User.findOne({ 
        $or: [
        {email},
        {phone}
      ]
    });
     if (!user || !(await user.isPasswordCorrect(password))) {
         return res.status(401).json({ error: "Invalid credentials" });
     }
    // Generate tokens
           // Step 5: Generate access and refresh tokens
        //    first way
           const { accessToken, refreshToken } = await genrateAccessAndRefreshToken(user._id);
        //    console.log("accessToken",accessToken);
        //    console.log("refreshToken",refreshToken);

           const loginUser = await User.findById(user._id).select("-password -refreshToken")
    //    second way
    // const accessToken = await user.generateAccessToken();
    // const refreshToken = await user.generateRefreshToken();

    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
    };

    // // Send response
    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json({
            message: 'Login successful',
            loginUser,
            accessToken,
        });

    
 } catch (error) {
    console.error(error);
        res.status(500).json({ error: "Server Error" })
 }
}

// User logout
const logout = async (req, res) => {
    try {
        const userId = req.user?._id; // Only if you're using middleware
        if (userId) {
            await User.findByIdAndUpdate(userId, { refreshToken: "" });
        }
        const options = {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
        };
        return res
            .status(200)
            .clearCookie("accessToken", options)
            .clearCookie("refreshToken", options)
            .json({ message: "User logged out" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong while logging out" });
    }
};


export {
    loginUser,
    signup,
    logout
}