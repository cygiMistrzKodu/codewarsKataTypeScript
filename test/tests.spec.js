"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const solution_1 = require("../src/solution");
const chai_1 = require("chai");
describe("L1: Bartender, drinks!", function () {
    it("Sample tests", function () {
        chai_1.assert.equal((0, solution_1.getDrinkByProfession)("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
        chai_1.assert.equal((0, solution_1.getDrinkByProfession)("scHOOl counselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
        chai_1.assert.equal((0, solution_1.getDrinkByProfession)("prOgramMer"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
        chai_1.assert.equal((0, solution_1.getDrinkByProfession)("bike ganG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
        chai_1.assert.equal((0, solution_1.getDrinkByProfession)("poLiTiCian"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
        chai_1.assert.equal((0, solution_1.getDrinkByProfession)("rapper"), "Cristal", "'Rapper' should map to 'Cristal'");
        chai_1.assert.equal((0, solution_1.getDrinkByProfession)("pundit"), "Beer", "'Pundit' should map to 'Beer'");
        chai_1.assert.equal((0, solution_1.getDrinkByProfession)("Pug"), "Beer", "'Pug' should map to 'Beer'");
        chai_1.assert.equal((0, solution_1.getDrinkByProfession)("jabrOnI"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
        chai_1.assert.equal((0, solution_1.getDrinkByProfession)("scHOOl COUnselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
        chai_1.assert.equal((0, solution_1.getDrinkByProfession)("prOgramMeR"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
        chai_1.assert.equal((0, solution_1.getDrinkByProfession)("bike GanG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
        chai_1.assert.equal((0, solution_1.getDrinkByProfession)("poLiTiCiAN"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
        chai_1.assert.equal((0, solution_1.getDrinkByProfession)("RAPPer"), "Cristal", "'Rapper' should map to 'Cristal'");
        chai_1.assert.equal((0, solution_1.getDrinkByProfession)("punDIT"), "Beer", "'Pundit' should map to 'Beer'");
        chai_1.assert.equal((0, solution_1.getDrinkByProfession)("pUg"), "Beer", "'Pug' should map to 'Beer'");
    });
});
