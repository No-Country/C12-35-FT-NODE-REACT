import db from "../data";

export default async (id: number) => {
  const cards = await db.getById(id);
  return cards;
};
