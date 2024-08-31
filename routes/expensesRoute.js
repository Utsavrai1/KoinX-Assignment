import express from "express";
import { getExpenses } from "../controllers/expenseController.js";

const router = express.Router();

// Route to get expenses by address

/**
 * @swagger
 * components:
 *   schemas:
 *     Expenses:
 *       type: object
 *       properties:
 *         currentPrice:
 *           type: string
 *           description: Current ETH price.
 *           example: "210.2"
 *         totalExpenses:
 *           type: number
 *           description: The total expenses in ETH for the given address.
 *           example: 0.005
 *
 * /api/v1/expenses/{address}:
 *   get:
 *     tags:
 *       - Expenses
 *     summary: Get total expenses for a user by address
 *     description: Retrieve the total gas fees spent by a user for all transactions associated with a specific Ethereum address.
 *     parameters:
 *       - in: path
 *         name: address
 *         required: true
 *         schema:
 *           type: string
 *         description: Address provided by the user.
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             examples:
 *               expenses:
 *                 summary: Expenses response
 *                 value:
 *                   totalExpenses: "0.114652"
 *                   currentPrice: 210956
 *       404:
 *         description: No transactions found for this address
 *       500:
 *         description: Server error
 */
router.get("/:address", getExpenses);

export default router;
