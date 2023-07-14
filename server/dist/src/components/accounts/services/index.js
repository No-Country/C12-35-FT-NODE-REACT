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
const getAccounts_service_1 = __importDefault(require("./getAccounts.service"));
const createAccount_service_1 = __importDefault(require("./createAccount.service"));
const updateAccount_service_1 = __importDefault(require("./updateAccount.service"));
const deleteAccount_service_1 = __importDefault(require("./deleteAccount.service"));
const getAccountById_service_1 = __importDefault(require("./getAccountById.service"));
class AccountService {
    getAccounts() {
        return __awaiter(this, void 0, void 0, function* () {
            const accounts = yield (0, getAccounts_service_1.default)();
            return accounts;
        });
    }
    getAccountById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const account = yield (0, getAccountById_service_1.default)(id);
            return account;
        });
    }
    createAccount(newAccount) {
        return __awaiter(this, void 0, void 0, function* () {
            const accountCreated = yield (0, createAccount_service_1.default)(newAccount);
            return accountCreated;
        });
    }
    updateAccount(id, account) {
        return __awaiter(this, void 0, void 0, function* () {
            const accountUpdated = yield (0, updateAccount_service_1.default)(id, account);
            return accountUpdated;
        });
    }
    deleteAccount(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const accountDeleted = yield (0, deleteAccount_service_1.default)(id);
            return accountDeleted;
        });
    }
}
exports.default = new AccountService();
