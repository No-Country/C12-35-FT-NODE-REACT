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
const response_1 = __importDefault(require("../../../utils/response"));
const services_1 = __importDefault(require("../services"));
const Mailer_1 = __importDefault(require("../../../services/Mailer"));
const envs_1 = require("../../../config/envs");
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield services_1.default.createUsers(req.body);
    const to = newUser.email;
    const subject = "Verify your email";
    const text = `${envs_1.HOST}/users/verify/${newUser.id}`;
    yield Mailer_1.default.sendMail(to, subject, text);
    return (0, response_1.default)(res, 200, newUser);
});
