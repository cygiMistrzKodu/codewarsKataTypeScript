"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumDigits = void 0;
function sumDigits(n) {
    return Math.abs(n).toString().split('').map(Number).reduce((sum, digit) => sum + digit, 0);
}
exports.sumDigits = sumDigits;
