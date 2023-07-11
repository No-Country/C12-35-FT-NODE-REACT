import { TransactionHistory } from "../entities/TransactionHistory.entity";
import getTransactionsHistory from "./getTransactionsHistory.service";
import createTransactionHistory from "./createTransactionHistory.service";
import getTransactionsHistoryById from "./getTransactionsHistoryById.service";
import updateTransactionHistory from "./updateTransactionHistory.service";
import deleteTransactionHistory from "./deleteTransactionHistory.service";

class TransactionHistoryService {
  async getTransactionsHistory() {
    const transactionsHistory = await getTransactionsHistory();
    return transactionsHistory;
  }
  async getTransactionsHistoryById(id: number) {
    const transactionHistory = await getTransactionsHistoryById(id);
    return transactionHistory;
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
}

export default new TransactionHistoryService();
