"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gooseFilter = void 0;
function gooseFilter(birds) {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(bird => !geese.includes(bird));
}
exports.gooseFilter = gooseFilter;
