export class Kata {
  static findLongest(array: number[]): number {
    return array.reduce((mostDigits, nextNumber) => mostDigits.toString().length >= nextNumber.toString().length ? mostDigits : nextNumber);
  }
}