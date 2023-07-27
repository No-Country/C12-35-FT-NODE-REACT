import db from "../data";
import { Transaction } from "../entities/Transaction.entity";

export default async (id: number, transaction: Transaction) => {
  const updatedTransaction = await db.update(id, transaction);
  return updatedTransaction;
};
