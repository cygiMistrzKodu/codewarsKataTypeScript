export function strCount(str: string, letter: string): number {

  return (str.match(new RegExp(letter, "g")) || []).length;
}