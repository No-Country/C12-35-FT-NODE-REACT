import db from "../data";

export default async () => {
  const transactionHistory = await db.getAll();
  return transactionHistory;
};
