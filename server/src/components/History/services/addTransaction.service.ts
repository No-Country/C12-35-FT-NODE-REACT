import { Transaction } from "../../Transaction/entities/Transaction.entity";
import db from "../data";

export default async (id: number, transactionHistory: Transaction) => {
  return await db.addTransaction(id, transactionHistory);
};
