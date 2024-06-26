export function removeChar(str: string): string {
  const arr = [...str]
  arr.pop();
  arr.shift();
  return arr.join('')
}
