import dotenv from "dotenv";
dotenv.config();
import "reflect-metadata";
import { DataSource } from "typeorm";
import { entities } from "./entities";
import { EnvVariables } from "./interface";

const envVariables: EnvVariables = {
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_USERNAME: process.env.DB_USERNAME || "postgres",
  DB_PASSWORD: process.env.DB_PASSWORD || "",
  DB_NAME: process.env.DB_NAME || "postgres",
  DB_PORT: process.env.DB_PORT || "5432"
};

export const AppDataSource: DataSource = new DataSource({
  type: "postgres",
  host: envVariables.DB_HOST,
  port: parseInt(envVariables.DB_PORT),
  username: envVariables.DB_USERNAME,
  password: envVariables.DB_PASSWORD,
  database: envVariables.DB_NAME,
  entities: entities,
  synchronize: true,
  logging: false
});

AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
  })
  .catch((error) => console.log(error));
