"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getTransactionsHistory_controller_1 = __importDefault(require("./getTransactionsHistory.controller"));
const createTransactionHistory_controller_1 = __importDefault(require("./createTransactionHistory.controller"));
const getTransactionHistoryById_controller_1 = __importDefault(require("./getTransactionHistoryById.controller"));
const updateTransactionHistory_controller_1 = __importDefault(require("./updateTransactionHistory.controller"));
const deleteTransactionHistory_controller_1 = __importDefault(require("./deleteTransactionHistory.controller"));
const utils_1 = __importDefault(require("../../../utils"));
exports.default = {
    getTransactionsHistory: utils_1.default.catched(getTransactionsHistory_controller_1.default),
    createTransactionHistory: utils_1.default.catched(createTransactionHistory_controller_1.default),
    getTransactionHistoryById: utils_1.default.catched(getTransactionHistoryById_controller_1.default),
    updateTransactionHistory: utils_1.default.catched(updateTransactionHistory_controller_1.default),
    deleteTransactionHistory: utils_1.default.catched(deleteTransactionHistory_controller_1.default)
};
