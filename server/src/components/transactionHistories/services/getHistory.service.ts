import db from "../data";

export default async () => {
  return await db.getPopulateHistory();
};
