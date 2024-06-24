export function humanYearsCatYearsDogYears(humanYears: number): [number, number, number] {

  const humanCatDogYear: [number, number, number] = [humanYears, 15, 15];

  if (humanYears <= 1) {
    humanCatDogYear;
  }

  if (humanYears >= 2) {

    const petYears = humanCatDogYear[1] + 9;

    humanCatDogYear[1] = petYears;
    humanCatDogYear[2] = petYears;
  }

  if (humanYears > 2) {
    humanCatDogYear[1] = humanCatDogYear[1] + 4 * (humanCatDogYear[0] - 2);
    humanCatDogYear[2] = humanCatDogYear[2] + 5 * (humanCatDogYear[0] - 2);
  }



  return humanCatDogYear;
}
