export const nbYear = (p0: number, percent: number, aug: number, p: number): number => {

  let populationState = p0;
  const growthEachYear = percent / 100;
  const commingOrLeavingFactor = aug;
  const expectedState = p;

  let years = 0;
  while (expectedState > populationState) {
    populationState += Math.floor(populationState * growthEachYear + commingOrLeavingFactor);
    years++;

  }

  return years;
}