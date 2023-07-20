import { ITransaction } from "../models/Transactions";
import db from "../data";

export default async (transaction: ITransaction) => {
  const newTransaction = await db.save(transaction);
  return newTransaction;
};
