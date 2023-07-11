import { AppDataSource } from "../DataSource/config";
import { DBInterface } from "./interface";

export default class DB implements DBInterface {
  private model: any;
  constructor(model: any) {
    this.model = model;
  }

  async getAll() {
    try {
      const users = await AppDataSource.getRepository(this.model).find();
      return users;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async getById(id: number) {
    try {
      const user = await AppDataSource.getRepository(this.model).findBy({ id });
      return user;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async findBy(data: any) {
    try {
      return await AppDataSource.getRepository(this.model).findBy(data);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async findOne(data: any) {
    try {
      return await AppDataSource.getRepository(this.model).findOne({ where: data });
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async save(entity: any) {
    try {
      const newUser = AppDataSource.getRepository(this.model).save(entity);
      return newUser;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async update(id: number, data: any) {
    try {
      const userUpdated = AppDataSource.getRepository(this.model).update({ id }, data);
      return userUpdated;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async delete(id: number) {
    try {
      const userUpdated = AppDataSource.getRepository(this.model).delete({ id });
      return userUpdated;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
