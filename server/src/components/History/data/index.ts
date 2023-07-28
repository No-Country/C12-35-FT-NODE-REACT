import DB from "../../../services/DataSource";
import { History } from "../entities/History.entity";
import { AppDataSource } from "../../../services/DataSource/config";

class HistoryDB extends DB {
  constructor() {
    super(History);
  }

  async addTransaction(id: number, newTransaction: any) {
    try {
<<<<<<< HEAD
      const history: any = await AppDataSource.getRepository(TransactionHistory).findBy({ id: 1 });
      if (!history) throw new Error("No se ha encontrado un historial");
      console.log(history);
      history.transactions = [...history.transactions, newTransaction];
=======
      const history: any = await AppDataSource.getRepository(History).findBy({ id });
      if (!history) throw new Error("No se ha encontrado un historial");
      await AppDataSource.createQueryBuilder()
        .update(History)
        .set({ transactions: newTransaction })
        .where("id = :id", { id })
        .execute();

      return history;
>>>>>>> 3147737 (.)
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async getPopulateHistory() {
    try {
      const history = await AppDataSource.getRepository(History).find({
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
      const history = await AppDataSource.getRepository(History).findOne({
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

export default new HistoryDB();
