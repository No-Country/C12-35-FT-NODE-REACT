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
const fakeUsers_1 = require("../data/fakeUsers");
const getUsers_service_1 = __importDefault(require("./getUsers.service"));
const createUser_service_1 = __importDefault(require("./createUser.service"));
const getUsersById_service_1 = __importDefault(require("./getUsersById.service"));
const verifyUser_service_1 = __importDefault(require("./verifyUser.service"));
const deleteUser_service_1 = __importDefault(require("./deleteUser.service"));
const updateUser_service_1 = __importDefault(require("./updateUser.service"));
const createUserPhoneVerification_service_1 = __importDefault(require("./createUserPhoneVerification.service"));
const verifyUserPhone_service_1 = __importDefault(require("./verifyUserPhone.service"));
class UserService {
    constructor() {
        this.fakeUsers = [fakeUsers_1.user1, fakeUsers_1.user2];
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield (0, getUsers_service_1.default)();
            return users;
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield (0, getUsersById_service_1.default)(id);
            return user;
        });
    }
    createUsers(newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const userCreated = yield (0, createUser_service_1.default)(newUser);
            return userCreated;
        });
    }
    verifyUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const verifiedUser = yield (0, verifyUser_service_1.default)(id);
            return verifiedUser;
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userDeleted = yield (0, deleteUser_service_1.default)(id);
            return userDeleted;
        });
    }
    updateUser(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userUpdated = yield (0, updateUser_service_1.default)(id, user);
            return userUpdated;
        });
    }
    createUserPhoneVerification(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield (0, createUserPhoneVerification_service_1.default)(id);
            return user;
        });
    }
    verifyUserPhone(id, secret, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield (0, verifyUserPhone_service_1.default)(id, secret, token);
            return user;
        });
    }
}
exports.default = new UserService();
