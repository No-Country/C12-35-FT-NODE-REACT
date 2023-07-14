"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionHistory = void 0;
const typeorm_1 = require("typeorm");
const Account_entity_1 = require("../../accounts/entities/Account.entity");
const Transaction_entity_1 = require("../../transactions/entities/Transaction.entity");
let TransactionHistory = exports.TransactionHistory = class TransactionHistory {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TransactionHistory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], TransactionHistory.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TransactionHistory.prototype, "transactionId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Account_entity_1.Account, (account) => account.id),
    __metadata("design:type", Array)
], TransactionHistory.prototype, "accounts", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Transaction_entity_1.Transaction, (transaction) => transaction.id),
    __metadata("design:type", Transaction_entity_1.Transaction)
], TransactionHistory.prototype, "transaction", void 0);
exports.TransactionHistory = TransactionHistory = __decorate([
    (0, typeorm_1.Entity)()
], TransactionHistory);
