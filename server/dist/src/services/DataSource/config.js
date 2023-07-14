"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const entities_1 = require("./entities");
const envs_1 = require("../../config/envs");
const envVariables = {
    DB_HOST: envs_1.DB_HOST,
    DB_USERNAME: envs_1.DB_USERNAME,
    DB_PASSWORD: envs_1.DB_PASSWORD,
    DB_NAME: envs_1.DB_NAME,
    DB_PORT: envs_1.DB_PORT
};
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: envVariables.DB_HOST,
    port: parseInt(envVariables.DB_PORT),
    username: envVariables.DB_USERNAME,
    password: envVariables.DB_PASSWORD,
    database: envVariables.DB_NAME,
    entities: entities_1.entities,
    synchronize: true,
    logging: false
});
exports.AppDataSource.initialize()
    .then(() => {
    // here you can start to work with your database
    console.log("connected");
})
    .catch((error) => console.log(error));
