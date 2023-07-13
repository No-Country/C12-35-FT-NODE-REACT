import db from "../data";

export default async () => {
  const users = await db.getAll();
  return users;
};
