export function sumDigits(n: number): number {

  return Math.abs(n).toString().split('').map(Number).reduce((sum, digit) => sum + digit, 0);
}