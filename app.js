import express from "express";
import dotenv from "dotenv";
import transactionRoutes from "./routes/transactionRoute.js";
import expenseRoutes from "./routes/expensesRoute.js";

dotenv.config();

const app = express();
app.use(express.json());

// Transaction Endpoint
app.use("/api/v1/transactions", transactionRoutes);

//Expenses EndPoint
app.use("/api/v1/expenses", expenseRoutes);

export default app;
