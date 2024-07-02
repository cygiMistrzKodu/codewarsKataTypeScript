"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pigIt = void 0;
const pigIt = (a) => {
    return a.split(" ").map(word => (word.length > 0 ? word + word[0] : word).slice(1))
        .map(word => /[.,!":?';]|^$/.test(word) ? word : word + "ay")
        .join(" ");
};
exports.pigIt = pigIt;
