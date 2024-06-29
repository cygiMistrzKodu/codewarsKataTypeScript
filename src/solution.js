"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strCount = void 0;
function strCount(str, letter) {
    return (str.match(new RegExp(letter, "g")) || []).length;
}
exports.strCount = strCount;
