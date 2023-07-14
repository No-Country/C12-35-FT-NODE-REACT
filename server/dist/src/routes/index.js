"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_1 = __importDefault(require("../components/users/routes"));
const routes_2 = __importDefault(require("../components/accounts/routes"));
const routes_3 = __importDefault(require("../components/transactions/routes"));
const routes_4 = __importDefault(require("../components/transactionHistories/routes"));
const routes_5 = __importDefault(require("../components/paymentGateways/routes"));
const routes_6 = __importDefault(require("../components/cards/routes"));
const routes_7 = __importDefault(require("../services/Auth/routes"));
const routes_8 = __importDefault(require("../services/Login/routes"));
const router = (0, express_1.Router)();
router.use("/users", routes_1.default);
router.use("/accounts", routes_2.default);
router.use("/transactions", routes_3.default);
router.use("/transactionHistory", routes_4.default);
router.use("/paymentGateway", routes_5.default);
router.use("/cards", routes_6.default);
router.use("/login", routes_8.default);
// la ruta /auth es únicamente para el testeo y entendimiento de tokens
router.use("/auth", routes_7.default);
exports.default = router;
