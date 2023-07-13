import { TransactionHistory } from "../entities/TransactionHistory.entity";
import db from "../data";

export default async (transactionHistory: TransactionHistory) => {
  const newTransactionHistory = await db.save(transactionHistory);
  return newTransactionHistory;
};
