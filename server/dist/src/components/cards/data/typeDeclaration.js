"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fakeCards_json_1 = __importDefault(require("./fakeCards.json"));
const fakeCards = fakeCards_json_1.default.map((obj) => {
    const card = Object.assign({}, obj);
    return card;
});
exports.default = fakeCards;
