/*
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
if (population > averagePopulation) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${
      averagePopulation - population
    } million below average`
  );
}
const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);
if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}
*/
isSpeakingEnglish = false;
population = 82;
const language = "Turkish";
if (isSpeakingEnglish && population < 50 && language === "English") {
  console.log("You should live in Turkey :)");
} else {
  console.log("Turkey does not meet your criteria :(");
}
