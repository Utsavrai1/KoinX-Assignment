import express from "express";
import { fetchTransactions } from "../controllers/transactionController.js";

const router = express.Router();

// Route to get transactions by address

/**
 * @swagger
 * components:
 *   schemas:
 *     Transaction:
 *       type: object
 *       properties:
 *         blockNumber:
 *           type: string
 *           description: The block number in which the transaction was included.
 *           example: "15116687"
 *         timeStamp:
 *           type: string
 *           description: The timestamp of the transaction (UNIX format).
 *           example: "1657480194"
 *         hash:
 *           type: string
 *           description: The hash of the transaction.
 *           example: "0xe4f9f788c18655358d9b6a86b2dd4255c6fef91009fb67a04b84edce26dd7c20"
 *         from:
 *           type: string
 *           description: The sender's Ethereum address.
 *           example: "0xb2723beacce4bc54f23544343927f048cef6bd5a"
 *         to:
 *           type: string
 *           description: The recipient's Ethereum address.
 *           example: "0xce94e5621a5f7068253c42558c147480f38b5e0d"
 *         value:
 *           type: string
 *           description: The value transferred in the transaction (in Wei).
 *           example: "256361350000000000"
 *         gas:
 *           type: string
 *           description: The gas used for the transaction.
 *           example: "105000"
 *         gasPrice:
 *           type: string
 *           description: The gas price for the transaction.
 *           example: "74646632790"
 *         isError:
 *           type: string
 *           description: Indicates if there was an error in the transaction (0 for success, 1 for error).
 *           example: "0"
 *         confirmations:
 *           type: string
 *           description: The number of confirmations for the transaction.
 *           example: "5531930"
 *         _id:
 *           type: string
 *           description: The unique ID of the transaction document in the database.
 *           example: "66d30f6d704d5af3b5c07b76"
 *
 * /api/v1/transactions/{address}:
 *   get:
 *     tags:
 *       - Task 1 (Transactions)
 *     summary: Fetch transactions for a user by address
 *     description: Retrieve a list of Ethereum transactions associated with a specific address.
 *     parameters:
 *       - in: path
 *         name: address
 *         required: true
 *         schema:
 *           type: string
 *         description: Address provided by the user.
 *     responses:
 *       200:
 *         description: A list of transactions
 *         content:
 *           application/json:
 *             examples:
 *               example1:
 *                 summary: Transactions response
 *                 value:
 *                   - blockNumber: "15116687"
 *                     timeStamp: "1657480194"
 *                     hash: "0xe4f9f788c18655358d9b6a86b2dd4255c6fef91009fb67a04b84edce26dd7c20"
 *                     from: "0xb2723beacce4bc54f23544343927f048cef6bd5a"
 *                     to: "0xce94e5621a5f7068253c42558c147480f38b5e0d"
 *                     value: "256361350000000000"
 *                     gas: "105000"
 *                     gasPrice: "74646632790"
 *                     isError: "0"
 *                     confirmations: "5531930"
 *                     _id: "66d30f6d704d5af3b5c07b76"
 *                   - blockNumber: "14609155"
 *                     timeStamp: "1650284543"
 *                     hash: "0x25f745fc71d9ddd0db561d06a023e6c654089861dc4625cdc81743afd3228982"
 *                     from: "0xf598b81ef8c7b52a7f2a89253436e72ec6dc871f"
 *                     to: "0xce94e5621a5f7068253c42558c147480f38b5e0d"
 *                     value: "10003420000000000"
 *                     gas: "105000"
 *                     gasPrice: "29489937413"
 *                     isError: "0"
 *                     confirmations: "6040699"
 *                     _id: "66d349cb7b40f71552932713"
 *       400:
 *         description: Invalid address
 *       404:
 *         description: No Data Found
 *       500:
 *         description: Server error
 */
router.get("/:address", fetchTransactions);

export default router;
