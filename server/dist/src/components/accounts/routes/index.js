"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("../controllers"));
const router = (0, express_1.Router)();
router.get("/", controllers_1.default.getAccounts);
router.get("/:id", controllers_1.default.getAccountById);
router.post("/", controllers_1.default.createAccount);
router.put("/:id", controllers_1.default.updateAccount);
router.delete("/:id", controllers_1.default.deleteAccount);
exports.default = router;
