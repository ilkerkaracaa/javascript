const country = "Turkey";
const continent = "Asia";
let population = 82;

console.log("Ülke:", country);
console.log("Kıta:", continent);
console.log("Nüfus (milyon):", population);

const isIsland = false;
const language = "Turkish";

console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);
population += 1;

console.log(population);
const finlandPopulation = 6;

console.log(population > finlandPopulation);

const averagePopulation = 33;

console.log(population < averagePopulation);

const description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description);

const descriptionNew = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
