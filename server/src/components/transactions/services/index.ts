import { Transaction } from "../entities/Transaction.entity";
import getTransactions from "./getTransactions.service";
import createTransaction from "./createTransaction.service";
import updateTransaction from "./updateTransaction.service";
import deleteTransaction from "./deleteTransaction.service";
import getTransactionById from "./getTransactionById.service";

class TransactionService {
  async getTransactions() {
    const transactions = await getTransactions();
    return transactions;
  }
  async getTransactionById(id: number) {
    const transaction = await getTransactionById(id);
    return transaction;
  }
  async createTransaction(newTransaction: Transaction) {
    const transactionCreated = await createTransaction(newTransaction);
    return transactionCreated;
  }
  async updateTransaction(id: number, transaction: Transaction) {
    const transactionUpdated = await updateTransaction(id, transaction);
    return transactionUpdated;
  }
  async deleteTransaction(id: number) {
    const transactionDeleted = await deleteTransaction(id);
    return transactionDeleted;
  }
}

export default new TransactionService();
