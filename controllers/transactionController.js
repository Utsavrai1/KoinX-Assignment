import Transaction from "../models/transaction.js";
import axios from "axios";

const fetchTransactions = async (req, res) => {
  const { address } = req.params;
  try {
    // Fetching transactions of a particular user with address from Etherscan API.
    const response = await axios.get(
      `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&sort=asc&apikey=${process.env.ETHERSCAN_API_KEY}`
    );

    // Checking if we got data and data.result from the API response or not
    if (!response.data || !response.data.result) {
      return res.status(404).json({ error: "No Data Found" });
    }

    //Handling Invalid Address Inputs
    if (response.data.status === "0" && response.data.message === "NOTOK") {
      return res.status(400).json({ error: response.data.result });
    }

    // Filtering the transactions to include only the necessary fields
    const filteredTransactions = response.data.result.map((tx) => ({
      blockNumber: tx.blockNumber,
      timeStamp: tx.timeStamp,
      hash: tx.hash,
      from: tx.from,
      to: tx.to,
      value: tx.value,
      gas: tx.gas,
      gasPrice: tx.gasPrice,
      isError: tx.isError,
      confirmations: tx.confirmations,
    }));

    // Updating the existing transactions or if not found we will create a new record.
    const updatedTransaction = await Transaction.findOneAndUpdate(
      { address },
      { transactions: filteredTransactions },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    // Sending the updated transactions as the response
    return res.json(updatedTransaction.transactions);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while fetching transactions." });
  }
};

export { fetchTransactions };
