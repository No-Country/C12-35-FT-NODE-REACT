"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const encryptPassword_middleware_1 = __importDefault(require("./encryptPassword.middleware"));
const validateDuplicate_middleware_1 = __importDefault(require("./validateDuplicate.middleware"));
exports.default = {
    encryptPassword: encryptPassword_middleware_1.default,
    validateDuplicate: validateDuplicate_middleware_1.default
};
