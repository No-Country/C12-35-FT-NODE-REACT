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
const DataSource_1 = require("@/services/DataSource");
const User_entity_1 = require("../entities/User.entity");
exports.default = {
    getAll: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const users = yield DataSource_1.AppDataSource.manager.find(User_entity_1.User);
            return users;
        }
        catch (error) {
            return error;
        }
    }),
    save: (user) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield DataSource_1.AppDataSource.manager.save(user);
        }
        catch (error) {
            return error;
        }
    })
};
