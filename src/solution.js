"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkExam = void 0;
function checkExam(array1, array2) {
    let score = 0;
    for (let asnwerIndex = 0; asnwerIndex < array1.length; asnwerIndex++) {
        const correctAnsewer = array1[asnwerIndex];
        const studentAnswer = array2[asnwerIndex];
        if (correctAnsewer == studentAnswer) {
            score += 4;
        }
        if (correctAnsewer != studentAnswer && studentAnswer != "") {
            score -= 1;
        }
    }
    return score < 0 ? 0 : score;
}
exports.checkExam = checkExam;
