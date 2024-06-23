"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dutyFree = void 0;
function dutyFree(normPrice, discount, hol) {
    const poudsPerBottleSave = (discount / 100) * normPrice;
    return Math.floor(hol / poudsPerBottleSave);
}
exports.dutyFree = dutyFree;
