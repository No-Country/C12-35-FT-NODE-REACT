import db from "../data";

export default async () => {
  const accounts = await db.getAll();
  return accounts;
};
