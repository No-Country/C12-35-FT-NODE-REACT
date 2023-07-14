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
exports.Account = void 0;
const typeorm_1 = require("typeorm");
const User_entity_1 = require("../../users/entities/User.entity");
const Transaction_entity_1 = require("../../transactions/entities/Transaction.entity");
const TransactionHistory_entity_1 = require("../../transactionHistories/entities/TransactionHistory.entity");
const Card_entity_1 = require("../../cards/entities/Card.entity");
let Account = exports.Account = class Account {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Account.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Account.prototype, "balance", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Account.prototype, "date_created", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Account.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => User_entity_1.User, (user) => user.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Account.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Transaction_entity_1.Transaction, (transaction) => transaction.id),
    __metadata("design:type", Array)
], Account.prototype, "transactions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TransactionHistory_entity_1.TransactionHistory, (transactionHistory) => transactionHistory.id),
    __metadata("design:type", Array)
], Account.prototype, "transactionHistory", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Card_entity_1.Card, (card) => card.id),
    __metadata("design:type", Array)
], Account.prototype, "cards", void 0);
exports.Account = Account = __decorate([
    (0, typeorm_1.Entity)()
], Account);
