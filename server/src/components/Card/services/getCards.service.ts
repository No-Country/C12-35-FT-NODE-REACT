import db from "../data";

export default async () => {
  const cards = await db.getAll();
  return cards;
};
