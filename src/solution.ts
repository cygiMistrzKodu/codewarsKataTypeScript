export function findAverage(array: number[]): number {

  if (array.length == 0) {
    return 0;
  }

  return array.reduce((sum, nextNumber) => sum + nextNumber, 0) / array.length;
}