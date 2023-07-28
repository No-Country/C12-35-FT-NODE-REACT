import db from "../data";
<<<<<<< HEAD
import { Transaction } from "../entities/Transaction.entity";

export default async (id: number, transaction: Transaction) => {
=======
import { ITransaction } from "../models/Transactions";

export default async (id: number, transaction: ITransaction) => {
>>>>>>> main
  const updatedTransaction = await db.update(id, transaction);
  return updatedTransaction;
};
