import { Account } from "../entities/Account.entity";
import db from "../data";

export default async (account: Account) => {
  const newAccount = await db.save(account);
  return newAccount;
};
