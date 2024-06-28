"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAverage = void 0;
function findAverage(array) {
    if (array.length == 0) {
        return 0;
    }
    return array.reduce((sum, nextNumber) => sum + nextNumber, 0) / array.length;
}
exports.findAverage = findAverage;
