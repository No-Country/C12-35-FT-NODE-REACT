import { AppDataSource } from "../../../services/DataSource/config";
import DB from "../../../services/DataSource";
import { Card } from "../entities/Card.entity";

class CardDB extends DB {
  constructor() {
    super(Card);
  }

  async getPopulateCards() {
    try {
      const users = await AppDataSource.getRepository(Card).find({
        relations: {
          account: true
        }
      });
      return users;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async getPopulateCardById(id: string) {
    try {
      const user = await AppDataSource.getRepository(Card).findOne({
        where: { id: id },
        relations: { account: true }
      });
      return user;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export default new CardDB();
