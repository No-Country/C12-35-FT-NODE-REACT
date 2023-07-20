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
}

export default new TransactionHistoryDB();
// import { DBInterface } from "./interface";
// import { EntitySchema } from "typeorm";

// export default class DB {
//   private entity: any;
//   constructor(entity: any) {
//     this.entity = entity;
//   }

//   async getAll() {
//     try {
//       const users = await AppDataSource.getRepository(this.entity).find();
//       return users;
//     } catch (error: any) {
//       throw new Error(error);
//     }
//   }
