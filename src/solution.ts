export function dutyFree(normPrice: number, discount: number, hol: number): number {

  const poudsPerBottleSave = (discount / 100) * normPrice

  return Math.floor(hol / poudsPerBottleSave)
}