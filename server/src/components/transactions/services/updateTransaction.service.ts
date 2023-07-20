import db from "../data";
import { ITransaction } from "../models/Transactions";

export default async (id: number, transaction: ITransaction) => {
  const updatedTransaction = await db.update(id, transaction);
  return updatedTransaction;
};
