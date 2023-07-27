import { AppDataSource } from "../../../services/DataSource/config";
import { Account } from "../entities/Account.entity";

export default async (data: any): Promise<Account> => {
  try {
    const account = await AppDataSource.getRepository(Account).findOne({
      where: { ...data },
      relations: {
        transactions: true,
        cards: true,
        user: true
      }
    });

    if (!account) throw new Error("No se econtro la cuenta");
    return account;
  } catch (error: any) {
    throw new Error(error);
  }
};
