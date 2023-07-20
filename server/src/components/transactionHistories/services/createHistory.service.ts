import { History } from "../entities/History.entity";
import db from "../data";

export default async (transactionHistory: History) => {
  const newTransactionHistory = await db.save(transactionHistory);
  return newTransactionHistory;
};
