"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getPaymentGateway_controller_1 = __importDefault(require("./getPaymentGateway.controller"));
const updatePaymentGateway_controller_1 = __importDefault(require("./updatePaymentGateway.controller"));
const deletePaymentGateway_controller_1 = __importDefault(require("./deletePaymentGateway.controller"));
const createPaymentGateway_controller_1 = __importDefault(require("./createPaymentGateway.controller"));
const getPaymentGatewayById_controller_1 = __importDefault(require("./getPaymentGatewayById.controller"));
const utils_1 = __importDefault(require("../../../utils"));
exports.default = {
    getPaymentGateway: utils_1.default.catched(getPaymentGateway_controller_1.default),
    updatePaymentGateway: utils_1.default.catched(updatePaymentGateway_controller_1.default),
    deletePaymentGateway: utils_1.default.catched(deletePaymentGateway_controller_1.default),
    createPaymentGateway: utils_1.default.catched(createPaymentGateway_controller_1.default),
    getPaymentGatewayById: utils_1.default.catched(getPaymentGatewayById_controller_1.default)
};
