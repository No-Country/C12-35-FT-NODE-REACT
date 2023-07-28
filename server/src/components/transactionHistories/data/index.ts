import DB from "../../../services/DataSource";
import { TransactionHistory } from "../entities/TransactionHistory.entity";
import { AppDataSource } from "../../../services/DataSource/config";

class TransactionHistoryDB extends DB {
  constructor() {
    super(TransactionHistory);
  }

  async addTransaction(id: number, newTransaction: any) {
    try {
      const history: any = await AppDataSource.getRepository(TransactionHistory).findBy({ id: 1 });
      if (!history) throw new Error("No se ha encontrado un historial");
      console.log(history);
      history.transactions = [...history.transactions, newTransaction];
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async getPopulateHistory() {
    try {
      const history = await AppDataSource.getRepository(TransactionHistory).find({
        relations: {
          transactions: true
        }
      });
      return history;
    } catch (error: any) {
      throw new Error(error);
    }
  }
  async getPopulateHistoryById(id: number) {
    try {
      const history = await AppDataSource.getRepository(TransactionHistory).findOne({
        where: { id: id },
        relations: {
          transactions: true
        }
      });
      return history;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export default new TransactionHistoryDB();
