"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getTransactions_controller_1 = __importDefault(require("./getTransactions.controller"));
const createTransaction_controller_1 = __importDefault(require("./createTransaction.controller"));
const updateTransaction_controller_1 = __importDefault(require("./updateTransaction.controller"));
const deleteTransaction_controller_1 = __importDefault(require("./deleteTransaction.controller"));
const getTransactionById_controller_1 = __importDefault(require("./getTransactionById.controller"));
const utils_1 = __importDefault(require("../../../utils"));
exports.default = {
    getTransactions: utils_1.default.catched(getTransactions_controller_1.default),
    createTransaction: utils_1.default.catched(createTransaction_controller_1.default),
    updateTransaction: utils_1.default.catched(updateTransaction_controller_1.default),
    deleteTransaction: utils_1.default.catched(deleteTransaction_controller_1.default),
    getTransactionById: utils_1.default.catched(getTransactionById_controller_1.default)
};
