import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser";

const app = express();

// Enable JSON parsing middleware
app.use(express.json({ limit: '16kb' }));

// Enable CORS for all routes
app.use(cors({
    origin: process.env.CORS_ORIGIN,  
    credentials: true,  
    methods: ["GET", "POST", "PATCH", "DELETE"],
}));

app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// Enable cookie-parser middleware
app.use(cookieParser());

// Import Routes (Uncomment when needed)
import FoodRouter from './routes/food.routes.js'; 
 import UserRouter from './routes/user.routes.js'; 

app.use('/api', FoodRouter);
 app.use('/api/auth', UserRouter);

export default app;
