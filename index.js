import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import transactionRoutes from "./routes/transactionRoute.js";
import cron from "./cron/fetchPrices.js";

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  const morgan = await import("morgan");
  app.use(morgan.default("tiny"));
}

cron;

// Transaction Endpoint
app.use("/transactions", transactionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
