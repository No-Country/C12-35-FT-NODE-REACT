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
const config_1 = __importDefault(require("./config"));
class Mailer {
    constructor(transporter) {
        this.transporter = transporter;
    }
    sendMail(to, subject, text) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.transporter.sendMail({
                    from: "Fund Wave",
                    to,
                    subject,
                    text
                });
            }
            catch (error) {
                return error;
            }
        });
    }
    sendMailWithHtml(to, subject, html) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.transporter.sendMail({
                    from: "Fund Wave",
                    to,
                    subject,
                    html
                });
            }
            catch (error) {
                return error;
            }
        });
    }
    sendMailWithAttachments(to, subject, text, attachments) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.transporter.sendMail({
                    from: "Fund Wave",
                    to,
                    subject,
                    text,
                    attachments
                });
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.default = new Mailer(config_1.default);
