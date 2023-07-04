import { User } from "../entities/User.entity";
import db from "../data";

export default async (user: User) => {
  const newUser = await db.save(user);
  return newUser;
};
