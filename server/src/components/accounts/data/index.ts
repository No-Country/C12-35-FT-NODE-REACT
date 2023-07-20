import { AppDataSource } from "../../../services/DataSource/config";
import DB from "../../../services/DataSource";
import { Account } from "../entities/Account.entity";

class AccountDB extends DB {
  constructor() {
    super(Account);
  }

  async getPopulateAccounts() {
    try {
      const users = await AppDataSource.getRepository(Account).find({
        relations: {
          transaction_history: true,
          cards: true
        }
      });
      return users;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export default new AccountDB();
