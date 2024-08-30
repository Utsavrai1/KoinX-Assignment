import express from "express";
import { fetchTransactions } from "../controllers/transactionController.js";

const router = express.Router();

// Route to get transactions by address
router.get("/:address", fetchTransactions);

export default router;
