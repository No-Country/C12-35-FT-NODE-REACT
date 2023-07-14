"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DataSource_1 = __importDefault(require("../../DataSource"));
const User_entity_1 = require("../../../components/users/entities/User.entity");
exports.default = new DataSource_1.default(User_entity_1.User);
