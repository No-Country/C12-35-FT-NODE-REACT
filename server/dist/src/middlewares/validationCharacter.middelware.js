"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../utils/errors");
exports.default = (req, res, next) => {
    const { name } = req.body;
    if (!name)
        next();
    throw new errors_1.ClientError("Error", 402);
};
