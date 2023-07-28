import db from "../data";

export default async (id: string) => {
  return await db.getPopulateCardById(id);
};
