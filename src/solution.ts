export function nearestSq(n: number): number {

  if (Number.isInteger(Math.sqrt(n))) {
    return n;
  }

  let leftSideSquare = 0;
  for (let number = n; number > 0; number--) {
    if (Number.isInteger(Math.sqrt(number))) {
      leftSideSquare = number;
      break;
    }
  }
  let squareLeftSideDistance = n - leftSideSquare;

  let rightSideSquare = 0;
  for (let number = n; ; number++) {
    if (Number.isInteger(Math.sqrt(number))) {
      rightSideSquare = number;
      break;
    }
  }

  let squareRightSideDistance = rightSideSquare - n;


  return squareLeftSideDistance < squareRightSideDistance ? leftSideSquare : rightSideSquare
}