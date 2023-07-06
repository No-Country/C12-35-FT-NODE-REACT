import { TransactionHistory } from "../entities/TransactionHistory.entity";
import getTransactionsHistory from "./getTransactionsHistory.service";
import createTransactionHistory from "./createTransactionHistory.service";

class TransactionHistoryService {
  async getTransactionsHistory() {
    const transactionsHistory = await getTransactionsHistory();
    return transactionsHistory;
  }

  async createTransactionHistory(newTransactionHistory: TransactionHistory) {
    const transactionHistoryCreated = await createTransactionHistory(newTransactionHistory);
    return transactionHistoryCreated;
  }
}

export default new TransactionHistoryService();
