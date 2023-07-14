"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAILER_PASS = exports.MAILER_USER = exports.MAILER_PORT = exports.HOST = exports.DB_PORT = exports.DB_NAME = exports.DB_PASSWORD = exports.DB_USERNAME = exports.DB_HOST = exports.SECRET = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//JWT
exports.SECRET = process.env.SECRET || "";
//Database
exports.DB_HOST = process.env.DB_HOST || "localhost";
exports.DB_USERNAME = process.env.DB_USERNAME || "postgres";
exports.DB_PASSWORD = process.env.DB_PASSWORD || "";
exports.DB_NAME = process.env.DB_NAME || "postgres";
exports.DB_PORT = process.env.DB_PORT || "5432";
//Routes host
exports.HOST = process.env.HOST || "http://localhost:8001";
//Mailer
exports.MAILER_PORT = process.env.MAILER_PORT || "465";
exports.MAILER_USER = process.env.MAILER_USER || "";
exports.MAILER_PASS = process.env.MAILER_PASS || "";
