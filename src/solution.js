"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
class Kata {
    static findLongest(array) {
        return array.reduce((mostDigits, nextNumber) => mostDigits.toString().length >= nextNumber.toString().length ? mostDigits : nextNumber);
    }
}
exports.Kata = Kata;
