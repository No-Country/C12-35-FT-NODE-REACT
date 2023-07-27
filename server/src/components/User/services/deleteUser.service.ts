import db from "../data";

export default async (id: number) => {
  const user = await db.delete(id);
  return user;
};
