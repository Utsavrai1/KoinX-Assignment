import express from "express";
import { getExpenses } from "../controllers/expenseController.js";

const router = express.Router();

// Route to get expenses by address
router.get("/:address", getExpenses);

export default router;
