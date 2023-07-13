import "reflect-metadata";
import { DataSource } from "typeorm";
import { entities } from "./entities";
import { EnvVariables } from "./interface";
import { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_PORT } from "../../config/envs";

const envVariables: EnvVariables = {
  DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  DB_PORT
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
    console.log("connected");
  })
  .catch((error) => console.log(error));
