import { User } from "src/components/users/entities/User.entity";
import db from "../data";

export default async (id: number) => {
  return await db.getById(id);
};
