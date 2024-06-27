export function checkExam(array1: string[], array2: string[]): number {

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