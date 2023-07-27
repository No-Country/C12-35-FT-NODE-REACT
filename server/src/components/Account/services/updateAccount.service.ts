import db from "../data";
import { IAccount } from "../models/Account";

export default async (id: number, account: IAccount) => {
  const accountUpdated = await db.update(id, account);
  return accountUpdated;
};
