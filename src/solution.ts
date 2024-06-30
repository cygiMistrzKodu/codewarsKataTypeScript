export function pipeFix(numbers: number[]): number[] {

  return [...Array(numbers[numbers.length - 1] - numbers[0] + 1).keys()].map(i => i + numbers[0]);

}