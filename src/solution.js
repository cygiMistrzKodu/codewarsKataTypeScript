"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipeFix = void 0;
function pipeFix(numbers) {
    return [...Array(numbers[numbers.length - 1] - numbers[0] + 1).keys()].map(i => i + numbers[0]);
}
exports.pipeFix = pipeFix;
