"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getUsers_controller_1 = __importDefault(require("./getUsers.controller"));
const createUser_controller_1 = __importDefault(require("./createUser.controller"));
const getUserById_controller_1 = __importDefault(require("./getUserById.controller"));
const verifyUser_controller_1 = __importDefault(require("./verifyUser.controller"));
const updateUser_controller_1 = __importDefault(require("./updateUser.controller"));
const deleteUser_controller_1 = __importDefault(require("./deleteUser.controller"));
const createUserPhoneVerification_controller_1 = __importDefault(require("./createUserPhoneVerification.controller"));
const verifyUserPhone_controller_1 = __importDefault(require("./verifyUserPhone.controller"));
const utils_1 = __importDefault(require("../../../utils"));
exports.default = {
    getUsers: utils_1.default.catched(getUsers_controller_1.default),
    createUser: utils_1.default.catched(createUser_controller_1.default),
    getUserById: utils_1.default.catched(getUserById_controller_1.default),
    verifyUser: utils_1.default.catched(verifyUser_controller_1.default),
    deleteUser: utils_1.default.catched(deleteUser_controller_1.default),
    updateUser: utils_1.default.catched(updateUser_controller_1.default),
    createUserPhoneVerification: utils_1.default.catched(createUserPhoneVerification_controller_1.default),
    verifyUserPhone: utils_1.default.catched(verifyUserPhone_controller_1.default)
};
