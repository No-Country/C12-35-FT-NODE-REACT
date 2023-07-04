"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getUsers_controller_1 = __importDefault(require("./getUsers.controller"));
const createUser_controller_1 = __importDefault(require("./createUser.controller"));
const utils_1 = __importDefault(require("@/utils"));
exports.default = {
    getUsers: utils_1.default.catched(getUsers_controller_1.default),
    createUser: utils_1.default.catched(createUser_controller_1.default)
};
