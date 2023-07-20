import { History } from "../entities/History.entity";
import getTransactionsHistory from "./getHistory.service";
import createTransactionHistory from "./createHistory.service";
import getTransactionsHistoryById from "./getHistoryById.service";
import updateTransactionHistory from "./updateTransactionHistory.service";
import deleteTransactionHistory from "./deleteHistory.service";
import { Transaction } from "../../../components/transactions/entities/Transaction.entity";
import addTransaction from "./addTransaction.service";

class TransactionHistoryService {
  async getTransactionsHistory() {
    return await getTransactionsHistory();
  }
  async getTransactionsHistoryById(id: number) {
    return await getTransactionsHistoryById(id);
  }
  async createTransactionHistory(newHistory: History) {
    return await createTransactionHistory(newHistory);
  }
  async updateTransactionHistory(id: number, newHistory: History) {
    return await updateTransactionHistory(id, newHistory);
  }
  async deleteTransactionHistory(id: number) {
    return await deleteTransactionHistory(id);
  }
  async addTransaction(id: number, newTransaction: Transaction) {
    return await addTransaction(id, newTransaction);
  }
}

export default new TransactionHistoryService();
