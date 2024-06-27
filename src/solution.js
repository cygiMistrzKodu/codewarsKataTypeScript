"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDrinkByProfession = void 0;
function getDrinkByProfession(profession) {
    const drinkProffesionMap = new Map([
        ["jabroni", "Patron Tequila"],
        ["school counselor", "Anything with Alcohol"],
        ["programmer", "Hipster Craft Beer"],
        ["bike gang member", "Moonshine"],
        ["politician", "Your tax dollars"],
        ["rapper", "Cristal"],
    ]);
    let drink = drinkProffesionMap.get(profession.toLowerCase());
    if (drink == undefined) {
        drink = "Beer";
    }
    return drink;
}
exports.getDrinkByProfession = getDrinkByProfession;
