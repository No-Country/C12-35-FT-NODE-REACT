import db from "../data";

export default async () => {
  const accounts = await db.getPopulateAccounts();
  return accounts;
};
