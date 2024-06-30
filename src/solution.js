"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.predictAge = void 0;
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
    const ages = [age1, age2, age3, age4, age5, age6, age7, age8];
    return Math.floor(Math.sqrt(ages.map(number => number * number).reduce((sum, number) => sum + number)) / 2);
}
exports.predictAge = predictAge;
