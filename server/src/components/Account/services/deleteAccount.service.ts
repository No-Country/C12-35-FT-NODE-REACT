import { AppDataSource } from "../../../services/DataSource/config";
import { Account } from "../entities/Account.entity";
import { User } from "../../../components/User/entities/User.entity";
import { History } from "../../../components/History/entities/History.entity";

export default async (id: number) => {
  await AppDataSource.createQueryBuilder()
    .update(Account)
    .set({ valid: false })
    .where("id = :id", { id: id })
    .execute();
  await AppDataSource.createQueryBuilder()
    .update(History)
    .set({ valid: false })
    .where("id = :id", { id: id })
    .execute();
  await AppDataSource.createQueryBuilder().update(User).set({ valid: false }).where("id = :id", { id: id }).execute();
  return true;
};
