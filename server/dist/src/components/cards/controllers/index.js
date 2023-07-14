"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getCards_controller_1 = __importDefault(require("./getCards.controller"));
const createCard_controller_1 = __importDefault(require("./createCard.controller"));
const updateCard_controller_1 = __importDefault(require("./updateCard.controller"));
const deleteCard_controller_1 = __importDefault(require("./deleteCard.controller"));
const getCardById_controller_1 = __importDefault(require("./getCardById.controller"));
const utils_1 = __importDefault(require("../../../utils"));
exports.default = {
    getCards: utils_1.default.catched(getCards_controller_1.default),
    createCard: utils_1.default.catched(createCard_controller_1.default),
    updateCard: utils_1.default.catched(updateCard_controller_1.default),
    deleteCard: utils_1.default.catched(deleteCard_controller_1.default),
    getCardById: utils_1.default.catched(getCardById_controller_1.default)
};
