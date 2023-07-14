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
const getTransactions_service_1 = __importDefault(require("./getTransactions.service"));
const createTransaction_service_1 = __importDefault(require("./createTransaction.service"));
const updateTransaction_service_1 = __importDefault(require("./updateTransaction.service"));
const deleteTransaction_service_1 = __importDefault(require("./deleteTransaction.service"));
const getTransactionById_service_1 = __importDefault(require("./getTransactionById.service"));
class TransactionService {
    getTransactions() {
        return __awaiter(this, void 0, void 0, function* () {
            const transactions = yield (0, getTransactions_service_1.default)();
            return transactions;
        });
    }
    getTransactionById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = yield (0, getTransactionById_service_1.default)(id);
            return transaction;
        });
    }
    createTransaction(newTransaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const transactionCreated = yield (0, createTransaction_service_1.default)(newTransaction);
            return transactionCreated;
        });
    }
    updateTransaction(id, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const transactionUpdated = yield (0, updateTransaction_service_1.default)(id, transaction);
            return transactionUpdated;
        });
    }
    deleteTransaction(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const transactionDeleted = yield (0, deleteTransaction_service_1.default)(id);
            return transactionDeleted;
        });
    }
}
exports.default = new TransactionService();
