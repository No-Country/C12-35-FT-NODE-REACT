"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const catched_1 = __importDefault(require("./catched"));
const response_1 = __importDefault(require("./response"));
exports.default = {
    respone: response_1.default,
    catched: catched_1.default
};
