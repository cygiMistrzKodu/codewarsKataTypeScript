"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nbYear = void 0;
const nbYear = (p0, percent, aug, p) => {
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
};
exports.nbYear = nbYear;
