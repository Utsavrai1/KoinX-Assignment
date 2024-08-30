import Transaction from "../models/transaction.js";
import Price from "../models/price.js";

const getExpenses = async (req, res) => {
  const { address } = req.params;
  try {
    // Fetch transactions from the database
    const transactionData = await Transaction.findOne({ address });

    if (!transactionData) {
      return res
        .status(404)
        .json({ error: "No transactions found for this address." });
    }

    const transactions = transactionData.transactions;
    let totalExpenses = 0;

    transactions.forEach((tx) => {
      totalExpenses += (parseInt(tx.gas) * parseInt(tx.gasPrice)) / 1e18;
    });

    // Fetch the latest Ethereum price
    const latestPrice = await Price.findOne().sort({ timestamp: -1 });

    res.json({
      totalExpenses: totalExpenses.toFixed(6),
      currentPrice: latestPrice ? latestPrice.price : "Price not available",
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching expenses." });
  }
};

export { getExpenses };
