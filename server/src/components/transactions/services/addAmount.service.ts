import { Account } from "../../accounts/entities/Account.entity";
import { Transaction } from "../entities/Transaction.entity";
import { History } from "../../../components/transactionHistories/entities/History.entity";
import { AppDataSource } from "../../../services/DataSource/config";
import TransactionService from "../../transactions/services";

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
    newTransaction.type = type ? type : "SEND";

    const transaction = await TransactionService.createTransaction(newTransaction);

    await AppDataSource.createQueryBuilder().relation(History, "transactions").of(account.id).add(transaction);

    return accountUpdated;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
