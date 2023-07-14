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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getTransactionsHistory_service_1 = __importDefault(require("./getTransactionsHistory.service"));
const createTransactionHistory_service_1 = __importDefault(require("./createTransactionHistory.service"));
const getTransactionsHistoryById_service_1 = __importDefault(require("./getTransactionsHistoryById.service"));
const updateTransactionHistory_service_1 = __importDefault(require("./updateTransactionHistory.service"));
const deleteTransactionHistory_service_1 = __importDefault(require("./deleteTransactionHistory.service"));
class TransactionHistoryService {
    getTransactionsHistory() {
        return __awaiter(this, void 0, void 0, function* () {
            const transactionsHistory = yield (0, getTransactionsHistory_service_1.default)();
            return transactionsHistory;
        });
    }
    getTransactionsHistoryById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const transactionHistory = yield (0, getTransactionsHistoryById_service_1.default)(id);
            return transactionHistory;
        });
    }
    createTransactionHistory(newTransactionHistory) {
        return __awaiter(this, void 0, void 0, function* () {
            const transactionHistoryCreated = yield (0, createTransactionHistory_service_1.default)(newTransactionHistory);
            return transactionHistoryCreated;
        });
    }
    updateTransactionHistory(id, newTransactionHistory) {
        return __awaiter(this, void 0, void 0, function* () {
            const transactionHistoryUpdated = yield (0, updateTransactionHistory_service_1.default)(id, newTransactionHistory);
            return transactionHistoryUpdated;
        });
    }
    deleteTransactionHistory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const transactionHistoryDeleted = yield (0, deleteTransactionHistory_service_1.default)(id);
            return transactionHistoryDeleted;
        });
    }
}
exports.default = new TransactionHistoryService();
