"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validateToken_middelware_1 = __importDefault(require("./validateToken.middelware"));
exports.default = {
    validateToken: validateToken_middelware_1.default
};
