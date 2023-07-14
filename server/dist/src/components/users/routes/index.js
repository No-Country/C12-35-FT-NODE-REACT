"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("../controllers"));
const middlewares_1 = __importDefault(require("../middlewares"));
const router = (0, express_1.Router)();
router.get("/", controllers_1.default.getUsers);
router.post("/", middlewares_1.default.validateDuplicate, middlewares_1.default.encryptPassword, controllers_1.default.createUser);
router.put("/:id", middlewares_1.default.encryptPassword, controllers_1.default.updateUser);
router.delete("/:id", controllers_1.default.deleteUser);
router.get("/:id", controllers_1.default.getUserById);
router.get("/verify/:id", controllers_1.default.verifyUser);
router.get("/createPhoneVerification/:id", controllers_1.default.createUserPhoneVerification);
router.post("/verifyPhone/:id", controllers_1.default.verifyUserPhone);
exports.default = router;
