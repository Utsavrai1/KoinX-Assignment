import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    address: { type: String, required: true, unique: true },
    transactions: [
      {
        blockNumber: String,
        timeStamp: String,
        hash: String,
        from: String,
        to: String,
        value: String,
        gas: String,
        gasPrice: String,
        isError: String,
        confirmations: String,
      },
    ],
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;
