export function multiTable(number: number): string {

  let mutiplicationTabel = "";
  for (let i = 1; i <= 10; i++) {
    mutiplicationTabel += i + ' * ' + number + ' = ' + i * number + '\n';
  }

  return mutiplicationTabel.trim();
}