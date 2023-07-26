import { Account } from "../../accounts/entities/Account.entity";
import { History } from "../../../components/transactionHistories/entities/History.entity";
import { AppDataSource } from "../../../services/DataSource/config";
import { Transaction } from "../entities/Transaction.entity";

export default async (account: Account, amount: number, transaction: Transaction) => {
  try {
    // if (Number.isNaN(amount)) throw new Error("El amount tiene un formato invalido");

    const accountUpdated = await AppDataSource.createQueryBuilder()
      .update(Account)
      .set({ balance: account.balance - amount })
      .where("id = :id", { id: account.id })
      .execute();

    await AppDataSource.createQueryBuilder().relation(History, "transactions").of(account.id).add(transaction);

    return accountUpdated;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
