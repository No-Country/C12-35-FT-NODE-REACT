"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const nodemailer_1 = __importDefault(require("nodemailer"));
const envs_1 = require("../../config/envs");
const envs_2 = require("../../config/envs");
const envs_3 = require("../../config/envs");
const mailerConfig = {
    MAILER_PORT: envs_3.MAILER_PORT,
    MAILER_USER: envs_2.MAILER_USER,
    MAILER_PASS: envs_1.MAILER_PASS
};
const nodemailerConfig = nodemailer_1.default.createTransport({
    host: "smtp.gmail.com",
    port: parseInt(mailerConfig.MAILER_PORT),
    secure: true,
    auth: {
        user: mailerConfig.MAILER_USER,
        pass: mailerConfig.MAILER_PASS
    }
});
exports.default = nodemailerConfig;
