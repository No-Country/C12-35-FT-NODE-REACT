import { AppDataSource } from "../DataSource/config";
import { DBInterface } from "./interface";
import { EntitySchema } from "typeorm";

export default class DB {
  private entity: any;
  constructor(entity: any) {
    this.entity = entity;
  }

  async getAll() {
    try {
      const users = await AppDataSource.getRepository(this.entity).find();
      return users;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async getById(id: number) {
    try {
      const user = await AppDataSource.getRepository(this.entity).findOne({ where: { id } });
      return user;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async findBy(data: any) {
    try {
      return await AppDataSource.getRepository(this.entity).findBy(data);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async findOne(data: any) {
    try {
      return await AppDataSource.getRepository(this.entity).findOne({ where: data });
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async save(model: any) {
    try {
      console.log(model);
      const newUser = AppDataSource.getRepository(this.entity).save(model);
      return newUser;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async update(id: number, data: any) {
    try {
      const userUpdated = AppDataSource.getRepository(this.entity).update({ id }, data);
      return userUpdated;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async delete(id: number) {
    try {
      const userUpdated = AppDataSource.getRepository(this.entity).delete({ id });
      return userUpdated;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
