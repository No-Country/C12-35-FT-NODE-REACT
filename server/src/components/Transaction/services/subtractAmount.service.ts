import { Account } from "../../Account/entities/Account.entity";
import { History } from "../../../components/History/entities/History.entity";
import { AppDataSource } from "../../../services/DataSource/config";
import { Transaction } from "../entities/Transaction.entity";
import TransactionService from "../services";

export default async (account: Account, amount: number) => {
  try {
    // if (Number.isNaN(amount)) throw new Error("El amount tiene un formato invalido");

    const accountUpdated = await AppDataSource.createQueryBuilder()
      .update(Account)
      .set({ balance: account.balance - amount })
      .where("id = :id", { id: account.id })
      .execute();

    const newTransaction = new Transaction();
    newTransaction.amount = amount;
    newTransaction.date = new Date();
    newTransaction.type = "SEND";

    const transaction = await TransactionService.createTransaction(newTransaction);

    await AppDataSource.createQueryBuilder().relation(History, "transactions").of(account.id).add(transaction);

    return accountUpdated;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
