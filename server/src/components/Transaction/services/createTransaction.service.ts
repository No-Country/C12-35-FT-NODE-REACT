<<<<<<< HEAD
import { Transaction } from "../entities/Transaction.entity";
import db from "../data";

export default async (transaction: Transaction) => {
=======
import { ITransaction } from "../models/Transactions";
import db from "../data";

export default async (transaction: ITransaction) => {
>>>>>>> main
  const newTransaction = await db.save(transaction);
  return newTransaction;
};
