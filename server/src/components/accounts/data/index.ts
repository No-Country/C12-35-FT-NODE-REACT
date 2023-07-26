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
          history: true,
          cards: true,
          user: true
        }
      });
      return users;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async getPopulateAccountById(id: number) {
    try {
      const users = await AppDataSource.getRepository(Account).findOne({
        where: { id: id },
        relations: {
          history: true,
          cards: true,
          user: true
        }
      });
      return users;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export default new AccountDB();
