import { Transaction } from "../entities/Transaction.entity";
import { Account } from "../../../components/accounts/entities/Account.entity";
import getTransactions from "./getTransactions.service";
import createTransaction from "./createTransaction.service";
import updateTransaction from "./updateTransaction.service";
import deleteTransaction from "./deleteTransaction.service";
import getTransactionById from "./getTransactionById.service";
import addAmount from "./addAmount.service";
import subtractAmount from "./subtractAmount.service";
import findOneTransaction from "./findOneTransaction.service";

class TransactionService {
  async getTransactions() {
    return await getTransactions();
  }
  async getTransactionById(id: number) {
    return await getTransactionById(id);
  }
  async findOneTransaction(data: any) {
    return await findOneTransaction(data);
  }
  async createTransaction(newTransaction: Transaction) {
    return await createTransaction(newTransaction);
  }
  async updateTransaction(id: number, transaction: Transaction) {
    return await updateTransaction(id, transaction);
  }
  async deleteTransaction(id: number) {
    return await deleteTransaction(id);
  }
  async addAmount(account: Account, amount: number, type?: string) {
    return await addAmount(account, amount, type);
  }
  async subtractAmount(account: Account, amount: number) {
    return await subtractAmount(account, amount);
  }
}

export default new TransactionService();
