import dotenv from "dotenv";
dotenv.config();
import "reflect-metadata";
import { DataSource } from "typeorm";
import { entities } from "./entities";
import { EnvVariables } from "./DataSource.interface";

const envVariables: EnvVariables = process.env as unknown as EnvVariables;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: envVariables.DB_PORT,
  username: envVariables.DB_USERNAME,
  password: envVariables.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: entities,
  synchronize: true,
  logging: false
});

AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
  })
  .catch((error) => console.log(error));
