import db from "../data";
import { User } from "../entities/User.entity";

export default async (id: number, user: User) => {
  const users = await db.update(id, user);
  return users;
};
