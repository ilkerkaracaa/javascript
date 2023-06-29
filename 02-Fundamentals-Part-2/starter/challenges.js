function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const country1 = describeCountry("Turkiye", 86, "Ankara");
const country2 = describeCountry("Sweden", 10, "Stockholm");
const country3 = describeCountry("Norway", 5, "Oslo");

console.log(country1);
console.log(country2);
console.log(country3);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

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
