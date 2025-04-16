import express from "express";
import userRouter from "./routes/user.js";
import mongoose from "mongoose";
import cors from "cors";

// connect to database
await mongoose.connect(process.env.MONGO_URI);

// create express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use(userRouter);


// listen to port
const PORT = process.env.PORT 
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});