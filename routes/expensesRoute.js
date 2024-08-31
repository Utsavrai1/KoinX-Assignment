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
 *         address:
 *           type: string
 *           description: The Ethereum address associated with the expenses.
 *           example: "0xce94e5621a5f7068253c42558c147480f38b5e0d"
 *         totalExpenses:
 *           type: number
 *           description: The total expenses in ETH for the given address.
 *           example: 0.005
 *
 * /api/v1/expenses/{address}:
 *   get:
 *     summary: Get total expenses for a user by address
 *     description: Retrieve the total gas fees spent by a user for all transactions associated with a specific Ethereum address.
 *     parameters:
 *       - in: path
 *         name: address
 *         required: true
 *         schema:
 *           type: string
 *         description: The Ethereum address of the user.
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Expenses'
 *       400:
 *         description: Invalid address
 *       500:
 *         description: Server error
 */
router.get("/:address", getExpenses);

export default router;
