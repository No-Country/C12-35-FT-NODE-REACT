import db from "../data";

export default async (id: number) => {
  const cards = await db.delete(id);
  return cards;
};
