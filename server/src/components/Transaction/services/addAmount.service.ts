import { Account } from "../../Account/entities/Account.entity";
import { Transaction } from "../entities/Transaction.entity";
import { AppDataSource } from "../../../services/DataSource/config";
import TransactionService from "../../Transaction/services";

export default async (account: Account, amount: number, type?: string) => {
  try {
    const accountUpdated = await AppDataSource.createQueryBuilder()
      .update(Account)
      .set({ balance: account.balance + amount })
      .where("id = :id", { id: account.id })
      .execute();
    const newTransaction = new Transaction();
    newTransaction.amount = amount;
    newTransaction.date = new Date();
    newTransaction.type = type ? type : "TRANSFER";
    newTransaction.account = account;

    const transaction = await TransactionService.createTransaction(newTransaction);

    await AppDataSource.createQueryBuilder().relation(Account, "transactions").of(account.id).add(transaction);

    return accountUpdated;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
