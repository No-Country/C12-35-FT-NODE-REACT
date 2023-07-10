import { TransactionHistory } from "../entities/TransactionHistory.entity";
import db from "../data";

export default async (id: number, transactionHistory: TransactionHistory) => {
  const newTransactionHistory = await db.update(id, transactionHistory);
  return newTransactionHistory;
};
