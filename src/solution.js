"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEvenNumbers = void 0;
const getEvenNumbers = (numbersArray) => {
    return numbersArray.filter(number => number % 2 == 0);
};
exports.getEvenNumbers = getEvenNumbers;
