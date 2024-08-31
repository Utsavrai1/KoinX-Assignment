import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import transactionRoutes from "./routes/transactionRoute.js";
import expenseRoutes from "./routes/expensesRoute.js";
import checkHealthRoutes from "./routes/checkServerHealthRoute.js";
import { fetchPrices } from "./cron/fetchPrices.js";
import cron from "node-cron";

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  const morgan = await import("morgan");
  app.use(morgan.default("tiny"));
}

// Cron job to fetch ethereum price every 10 minutes
cron.schedule("*/10 * * * *", async () => {
  await fetchPrices();
});

app.get("/", async (req, res) => {
  return res.send("KoinX Assignment");
});

//Check Health of the Server
app.use("/health", checkHealthRoutes);

// Transaction Endpoint
app.use("/api/v1/transactions", transactionRoutes);

//Expenses EndPoint
app.use("/api/v1/expenses", expenseRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
