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
/*
const myCountry = {
  country: "Turkey",
  capital: "Ankara",
  language: "Turkish",
  population: 83,
  neighbours: ["Greece", "Bulgaria", "Georgia"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    return this.isIsland;
  },
};

myCountry.describe();
console.log(myCountry.checkIsland());
myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);
*/
/*
for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}
*/
/*
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const populations = [86, 10, 5, 1300];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

for (let i = 0; i < percentages2.length; i++) {
  console.log(percentages2[i]);
}
*/
/*
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const populations = [86, 10, 5, 1300];
const percentages2 = [];

let i = 0;
while (i < populations.length) {
  percentages2.push(percentageOfWorld1(populations[i]));
  i++;
}

i = 0;
while (i < percentages2.length) {
  console.log(percentages2[i]);
  i++;
}
*/
