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
const errors_1 = require("../utils/errors");
const Auth_1 = __importDefault(require("../services/Auth"));
exports.default = (req, _res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = yield Auth_1.default.ensureToken(req);
        console.log("bvalidateToken: " + token);
        req.token = token;
        console.log("validateToken: " + req.token);
        next();
    }
    catch (error) {
        throw new errors_1.ClientError(error.message, 403);
    }
});
