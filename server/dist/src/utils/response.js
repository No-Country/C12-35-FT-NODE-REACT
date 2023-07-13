"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function response(res, status, data) {
    return res.status(status).json({ error: false, data });
}
exports.default = response;
