"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distinct = void 0;
const distinct = (a) => {
    return Array.from(new Set(a));
};
exports.distinct = distinct;
