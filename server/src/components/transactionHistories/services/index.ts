import { TransactionHistory } from "../entities/TransactionHistory.entity";
import getTransactionsHistory from "./getTransactionsHistory.service";
import createTransactionHistory from "./createTransactionHistory.service";
import getTransactionsHistoryById from "./getTransactionsHistoryById.service";
import updateTransactionHistory from "./updateTransactionHistory.service";
import deleteTransactionHistory from "./deleteTransactionHistory.service";
import { Transaction } from "../../../components/transactions/entities/Transaction.entity";
import addTransaction from "./addTransaction.service";

class TransactionHistoryService {
  async getTransactionsHistory() {
    const transactionsHistory = await getTransactionsHistory();
    return transactionsHistory;
  }
  async getTransactionsHistoryById(id: number) {
    return await getTransactionsHistoryById(id);
  }
  async createTransactionHistory(newTransactionHistory: TransactionHistory) {
    const transactionHistoryCreated = await createTransactionHistory(newTransactionHistory);
    return transactionHistoryCreated;
  }
  async updateTransactionHistory(id: number, newTransactionHistory: TransactionHistory) {
    const transactionHistoryUpdated = await updateTransactionHistory(id, newTransactionHistory);
    return transactionHistoryUpdated;
  }
  async deleteTransactionHistory(id: number) {
    const transactionHistoryDeleted = await deleteTransactionHistory(id);
    return transactionHistoryDeleted;
  }
  async addTransaction(id: number, newTransaction: Transaction) {
    return await addTransaction(id, newTransaction);
  }
}

export default new TransactionHistoryService();
