/*
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const country1 = describeCountry("Turkiye", 86, "Ankara");
const country2 = describeCountry("Sweden", 10, "Stockholm");
const country3 = describeCountry("Norway", 5, "Oslo");

console.log(country1);
console.log(country2);
console.log(country3);

console.log(percentageOfWorld1(86));
console.log(percentageOfWorld1(10));
console.log(percentageOfWorld1(5));

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

console.log(percentageOfWorld2(86));
console.log(percentageOfWorld2(10));
console.log(percentageOfWorld2(5));

percentageOfWorld3 = (population) => (population / 7900) * 100;

console.log(percentageOfWorld3(86));
console.log(percentageOfWorld3(10));
console.log(percentageOfWorld3(5));

function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
}

console.log(describePopulation("Turkey", 86));
console.log(describePopulation("Sweden", 10));
console.log(describePopulation("Norway", 5));
*/
/*
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

populations = [86, 10, 5, 1300];

console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);
*/
/*
const neighbours = [
  "Greece",
  "Bulgaria",
  "Georgia",
  "Armenia",
  "Iran",
  "Iraq",
  "Syria",
];

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}

neighbours[neighbours.indexOf("Syria")] = "Republic of Syria";
console.log(neighbours);
*/
const myCountry = {
  country: "Turkey",
  capital: "Ankara",
  language: "Turkish",
  population: 83,
  neighbours: ["Greece", "Bulgaria", "Georgia"],
};

console.log(myCountry);
