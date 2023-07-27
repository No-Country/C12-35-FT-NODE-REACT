import db from "../data";
import { IUser } from "../models/IUser";

export default async (id: number, user: Partial<IUser>) => {
  const users = await db.update(id, user);
  return users;
};
