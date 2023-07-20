import db from "../data";
export default async (id: number) => {
  const accounts = await db.getRepository();
  const newTable = await accounts
    .createQueryBuilder()
    .leftJoinAndSelect("account.cards", "card")
    .leftJoinAndSelect("account.transactionHistory", "transactionHistory")
    .where("account.id = :accountId", { id })
    .getOne();
  return newTable;
};
