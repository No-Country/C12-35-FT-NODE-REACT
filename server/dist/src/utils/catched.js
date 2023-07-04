"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (fn) => {
    return (req, res, next) => {
        return fn(req, res).catch((err) => next(err));
    };
};
