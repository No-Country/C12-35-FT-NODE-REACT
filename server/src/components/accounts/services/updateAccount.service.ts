import db from "../data";
import { Account } from "../entities/Account.entity";

export default async (id: number, account: Account) => {
  const accountUpdated = await db.update(id, account);
  return accountUpdated;
};
