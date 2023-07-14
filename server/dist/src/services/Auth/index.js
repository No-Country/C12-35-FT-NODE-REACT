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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const envs_1 = require("../../config/envs");
const errors_1 = require("../../utils/errors");
class AuthService {
    saveToken(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!envs_1.SECRET)
                    throw new errors_1.ClientError("Debe configurarse un secret de authentificación");
                const token = jsonwebtoken_1.default.sign({ id }, envs_1.SECRET, {
                    expiresIn: 60 * 60 * 24
                });
                return token;
            }
            catch (error) {
                throw new errors_1.ClientError(error);
            }
        });
    }
    validateToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            // espera recibir el req.headers["access-token"]
            try {
                if (!token)
                    throw new errors_1.ClientError("No se proporcionó un token", 404);
                const decoded = jsonwebtoken_1.default.verify(token, envs_1.SECRET);
                return decoded;
            }
            catch (error) {
                throw new errors_1.ClientError(error, 404);
            }
        });
    }
    ensureToken(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const bearer = req.headers["access-token"];
            if (typeof bearer !== "undefined") {
                return bearer;
            }
            else {
                throw new Error("usuario no autorizado");
            }
        });
    }
}
exports.default = new AuthService();
