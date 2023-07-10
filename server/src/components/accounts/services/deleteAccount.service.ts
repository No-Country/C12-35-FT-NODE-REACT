import db from "../data";

export default async (id: number) => {
  const accounts = await db.delete(id);
  return accounts;
};
