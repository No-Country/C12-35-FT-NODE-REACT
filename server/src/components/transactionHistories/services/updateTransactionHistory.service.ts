import { History } from "../entities/History.entity";
import db from "../data";

export default async (id: number, transactionHistory: History) => {
  const newTransactionHistory = await db.update(id, transactionHistory);
  return newTransactionHistory;
};
