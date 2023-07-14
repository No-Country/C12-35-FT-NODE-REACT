"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("../controllers"));
const router = (0, express_1.Router)();
router.get("/", controllers_1.default.getPaymentGateway);
router.post("/", controllers_1.default.createPaymentGateway);
router.put("/:id", controllers_1.default.updatePaymentGateway);
router.delete("/:id", controllers_1.default.deletePaymentGateway);
router.get("/:id", controllers_1.default.getPaymentGatewayById);
exports.default = router;
