export function getDrinkByProfession(profession: string): string {

  const drinkProffesionMap = new Map<string, string>([
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