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
const typeDeclaration_1 = __importDefault(require("../data/typeDeclaration"));
const getCards_service_1 = __importDefault(require("./getCards.service"));
const createCard_service_1 = __importDefault(require("./createCard.service"));
const updateCard_service_1 = __importDefault(require("./updateCard.service"));
const getCardById_service_1 = __importDefault(require("./getCardById.service"));
const deleteCard_service_1 = __importDefault(require("./deleteCard.service"));
class CardService {
    constructor() {
        this.fakeCards = typeDeclaration_1.default;
    }
    getCards() {
        return __awaiter(this, void 0, void 0, function* () {
            const creditCards = yield (0, getCards_service_1.default)();
            return creditCards;
        });
    }
    createCard(newCreditCard) {
        return __awaiter(this, void 0, void 0, function* () {
            const creditCardCreated = yield (0, createCard_service_1.default)(newCreditCard);
            return creditCardCreated;
        });
    }
    updateCard(id, updatedCreditCard) {
        return __awaiter(this, void 0, void 0, function* () {
            const creditCardUpdated = yield (0, updateCard_service_1.default)(id, updatedCreditCard);
            return creditCardUpdated;
        });
    }
    getCardById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const creditCard = yield (0, getCardById_service_1.default)(id);
            return creditCard;
        });
    }
    deleteCard(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const creditCardDeleted = yield (0, deleteCard_service_1.default)(id);
            return creditCardDeleted;
        });
    }
}
exports.default = new CardService();
