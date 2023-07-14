"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DataSource_1 = __importDefault(require("../../../services/DataSource"));
const Transaction_entity_1 = require("../entities/Transaction.entity");
exports.default = new DataSource_1.default(Transaction_entity_1.Transaction);
