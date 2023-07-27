import db from "../data";

export default async () => {
  const transaction = await db.getAll();
  return transaction;
};
