"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const entities_1 = require("./entities");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "admin",
    database: "test",
    entities: entities_1.entities,
    synchronize: true,
    logging: false
});
exports.AppDataSource.initialize()
    .then(() => {
    // here you can start to work with your database
})
    .catch((error) => console.log(error));
