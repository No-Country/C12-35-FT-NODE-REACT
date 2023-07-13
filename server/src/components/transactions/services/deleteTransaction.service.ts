import db from "../data";

export default async (id: number) => {
  const transaction = await db.delete(id);
  return transaction;
};
