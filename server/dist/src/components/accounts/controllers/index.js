"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getAccount_controller_1 = __importDefault(require("./getAccount.controller"));
const getAccount_controller_2 = __importDefault(require("./getAccount.controller"));
const updateAccount_controller_1 = __importDefault(require("./updateAccount.controller"));
const deleteAccount_controller_1 = __importDefault(require("./deleteAccount.controller"));
const getAccountById_controller_1 = __importDefault(require("./getAccountById.controller"));
const utils_1 = __importDefault(require("../../../utils"));
exports.default = {
    getAccounts: utils_1.default.catched(getAccount_controller_1.default),
    createAccount: utils_1.default.catched(getAccount_controller_2.default),
    updateAccount: utils_1.default.catched(updateAccount_controller_1.default),
    deleteAccount: utils_1.default.catched(deleteAccount_controller_1.default),
    getAccountById: utils_1.default.catched(getAccountById_controller_1.default)
};
