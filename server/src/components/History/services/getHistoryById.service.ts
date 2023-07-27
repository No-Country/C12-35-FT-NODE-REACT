import db from "../data";

export default async (id: number) => {
  return await db.getPopulateHistoryById(id);
};
