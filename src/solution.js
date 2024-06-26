"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mxdiflg = void 0;
const mxdiflg = (a1, a2) => {
    let maxDiffrence = -1;
    let wordLengthDiffrence = 0;
    a1.forEach((word1) => {
        a2.forEach((word2) => {
            wordLengthDiffrence = Math.abs(word1.length - word2.length);
            if (wordLengthDiffrence > maxDiffrence) {
                maxDiffrence = wordLengthDiffrence;
            }
        });
    });
    return maxDiffrence;
};
exports.mxdiflg = mxdiflg;
