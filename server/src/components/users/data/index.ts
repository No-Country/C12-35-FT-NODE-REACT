import { AppDataSource } from "@/services/DataSource";
import { User as UserEntity } from "../entities/User.entity";
import { User } from "../models/Users";

export default {
  getAll: async () => {
    try {
      const users = await AppDataSource.manager.find(UserEntity);
      return users;
    } catch (error) {
      return error;
    }
  },
  save: async (user: User) => {
    try {
      await AppDataSource.manager.save(user);
    } catch (error) {
      return error;
    }
  }
};
