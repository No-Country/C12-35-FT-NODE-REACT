import db from "../data";

export default async (data: any) => {
  return await db.findOne(data);
};
