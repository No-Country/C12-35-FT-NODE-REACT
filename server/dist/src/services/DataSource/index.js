"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../DataSource/config");
class DB {
    constructor(model) {
        this.model = model;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield config_1.AppDataSource.getRepository(this.model).find();
                return users;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield config_1.AppDataSource.getRepository(this.model).findBy({ id });
                return user;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    findBy(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield config_1.AppDataSource.getRepository(this.model).findBy(data);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    findOne(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield config_1.AppDataSource.getRepository(this.model).findOne({ where: data });
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    save(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = config_1.AppDataSource.getRepository(this.model).save(entity);
                return newUser;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userUpdated = config_1.AppDataSource.getRepository(this.model).update({ id }, data);
                return userUpdated;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userUpdated = config_1.AppDataSource.getRepository(this.model).delete({ id });
                return userUpdated;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.default = DB;
