import { AppDataSource } from "../../../services/DataSource/config";
import DB from "../../../services/DataSource";
import { Transaction } from "../entities/Transaction.entity";

class TransactionDB extends DB {
  constructor() {
    super(Transaction);
  }

  async getPopulateTransaction() {
    try {
      const users = await AppDataSource.getRepository(Transaction).find({
        relations: {
          account: true
        }
      });
      return users;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async getPopulateTransactionById(id: string) {
    try {
      const user = await AppDataSource.getRepository(Transaction).findOne({
        where: { id: id },
        relations: {
          account: {
            user: true
          }
        }
      });
      return user;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export default new TransactionDB();
