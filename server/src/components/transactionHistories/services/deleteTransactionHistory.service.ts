import db from "../data";

export default async (id: number) => {
  const transactionHistory = await db.delete(id);
  return transactionHistory;
};
