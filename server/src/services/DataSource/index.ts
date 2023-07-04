import "reflect-metadata";
import { DataSource } from "typeorm";
import { entities } from "./entities";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "alcaraz",
  database: "wallet",
  entities: entities,
  synchronize: true,
  logging: false
});

AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
  })
  .catch((error) => console.log(error));
