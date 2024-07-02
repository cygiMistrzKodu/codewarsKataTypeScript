export const pigIt = (a: string): string => {

  return a.split(" ").map(word => (word.length > 0 ? word + word[0] : word).slice(1))
    .map(word => /[.,!":?';]|^$/.test(word) ? word : word + "ay")
    .join(" ");
}