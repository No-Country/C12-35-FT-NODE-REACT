import { Transaction } from "../entities/Transaction.entity";
import getTransactions from "./getTransactions.service";
import createTransaction from "./createTransaction.service";

class TransactionService {
  async getTransactions() {
    const transactions = await getTransactions();
    return transactions;
  }

  async createTransaction(newTransaction: Transaction) {
    const transactionCreated = await createTransaction(newTransaction);
    return transactionCreated;
  }
}

export default new TransactionService();
