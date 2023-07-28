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
        relations: ["cards", "user", "transactions"]
      });
      return users;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async getPopulateAccountById(id: number) {
    try {
      const user = await AppDataSource.getRepository(Account).findOne({
        where: { id: id },
        relations: ["cards", "user", "transactions"]
      });
      return user;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export default new AccountDB();
