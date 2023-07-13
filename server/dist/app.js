"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./src/server"));
const ENV = {
    PORT: 8001
};
server_1.default.listen(ENV.PORT, () => console.log(`server running on port: ${ENV.PORT}`));
