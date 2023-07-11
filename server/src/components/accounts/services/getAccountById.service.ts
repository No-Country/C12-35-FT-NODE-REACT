import db from "../data";

export default async (id: number) => {
  const accounts = await db.getById(id);
  return accounts;
};
