"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function response(res, status, data, error = false) {
    return res.status(status).json({ error, data });
}
exports.default = response;
