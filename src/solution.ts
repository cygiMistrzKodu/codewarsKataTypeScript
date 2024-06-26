export function factorial(n: number) {
  if (n == 0 || n == 1) {
    return 1;
  }

  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}