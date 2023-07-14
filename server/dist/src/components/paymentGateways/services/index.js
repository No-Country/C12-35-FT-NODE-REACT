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
const getPaymentGateway_service_1 = __importDefault(require("./getPaymentGateway.service"));
const createPaymentGateway_service_1 = __importDefault(require("./createPaymentGateway.service"));
const updatePaymentGateway_service_1 = __importDefault(require("./updatePaymentGateway.service"));
const deletePaymentGateway_service_1 = __importDefault(require("./deletePaymentGateway.service"));
const getPaymentGatewayById_service_1 = __importDefault(require("./getPaymentGatewayById.service"));
class PaymentGatewayService {
    getPaymentGateway() {
        return __awaiter(this, void 0, void 0, function* () {
            const PaymentGateway = yield (0, getPaymentGateway_service_1.default)();
            return PaymentGateway;
        });
    }
    getPaymentGatewayById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const PaymentGateway = yield (0, getPaymentGatewayById_service_1.default)(id);
            return PaymentGateway;
        });
    }
    createPaymentGateway(paymentGateway) {
        return __awaiter(this, void 0, void 0, function* () {
            const newPaymentGateway = yield (0, createPaymentGateway_service_1.default)(paymentGateway);
            return newPaymentGateway;
        });
    }
    updatePaymentGateway(id, paymentGateway) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedPaymentGateway = yield (0, updatePaymentGateway_service_1.default)(id, paymentGateway);
            return updatedPaymentGateway;
        });
    }
    deletePaymentGateway(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedPaymentGateway = yield (0, deletePaymentGateway_service_1.default)(id);
            return deletedPaymentGateway;
        });
    }
}
exports.default = new PaymentGatewayService();
