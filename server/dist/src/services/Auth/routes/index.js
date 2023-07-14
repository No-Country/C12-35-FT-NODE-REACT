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
const express_1 = require("express");
const __1 = __importDefault(require("../"));
const user_db_1 = __importDefault(require("../data/user.db"));
const middlewares_1 = __importDefault(require("../../../middlewares"));
const router = (0, express_1.Router)();
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const token = yield __1.default.saveToken(id);
        console.log(token);
        return res.status(200).json({ token });
    }
    catch (error) {
        // throw new ClientError(error.message, 403);
        return res.status(404).send(error.message);
    }
}));
router.get("/protected", middlewares_1.default.validateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.token);
        yield __1.default.validateToken(req.token);
        return res.status(200).json({ auth: true, token: req.token });
    }
    catch (error) {
        // throw new ClientError(error.message, 403);
        return res.status(404).send(error.message);
    }
}));
// req.headers["access-token"]
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield user_db_1.default.findOne({ email });
        console.log(user);
        if (!user)
            throw new Error("user dosen't exist");
        const token = yield __1.default.saveToken(user.id);
        console.log(token);
        // const authPassword: any = await Encryp.validate(password, user.password);
        const check = yield __1.default.validateToken(token);
        res.status(200).json({ auth: true, user, token });
    }
    catch (error) {
        res.status(400).json({ auth: false, error: error });
    }
}));
exports.default = router;
