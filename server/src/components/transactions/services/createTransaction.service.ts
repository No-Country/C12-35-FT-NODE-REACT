import { Transaction } from "../entities/Transaction.entity";
import db from "../data";

export default async (transaction: Transaction) => {
  const newTransaction = await db.save(transaction);
  return newTransaction;
};
