"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factorial = void 0;
function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}
exports.factorial = factorial;
