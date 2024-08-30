import express from "express";
import axios from "axios";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
