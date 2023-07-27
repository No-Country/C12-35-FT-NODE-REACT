import db from "../data";

export default async (id: number) => {
  const transaction = await db.getById(id);
  return transaction;
};
