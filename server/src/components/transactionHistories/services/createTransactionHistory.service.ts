import { ITransactionHistory } from "../models/TransactionsHistory";
import db from "../data";

export default async (transactionHistory: ITransactionHistory) => {
  const newTransactionHistory = await db.save(transactionHistory);
  return newTransactionHistory;
};
