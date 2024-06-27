import {getDrinkByProfession} from '../src/solution';
import {assert} from "chai";

describe("L1: Bartender, drinks!", function(){
  it("Sample tests", function() {
    assert.equal(getDrinkByProfession("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
    assert.equal(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
    assert.equal(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
    assert.equal(getDrinkByProfession("bike ganG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
    assert.equal(getDrinkByProfession("poLiTiCian"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
    assert.equal(getDrinkByProfession("rapper"), "Cristal", "'Rapper' should map to 'Cristal'");
    assert.equal(getDrinkByProfession("pundit"), "Beer", "'Pundit' should map to 'Beer'");
    assert.equal(getDrinkByProfession("Pug"), "Beer", "'Pug' should map to 'Beer'");
    assert.equal(getDrinkByProfession("jabrOnI"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
    assert.equal(getDrinkByProfession("scHOOl COUnselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
    assert.equal(getDrinkByProfession("prOgramMeR"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
    assert.equal(getDrinkByProfession("bike GanG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
    assert.equal(getDrinkByProfession("poLiTiCiAN"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
    assert.equal(getDrinkByProfession("RAPPer"), "Cristal", "'Rapper' should map to 'Cristal'");
    assert.equal(getDrinkByProfession("punDIT"), "Beer", "'Pundit' should map to 'Beer'");
    assert.equal(getDrinkByProfession("pUg"), "Beer", "'Pug' should map to 'Beer'");
  });
});