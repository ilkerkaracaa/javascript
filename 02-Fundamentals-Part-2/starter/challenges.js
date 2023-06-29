function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const country1 = describeCountry("Turkiye", 86, "Ankara");
const country2 = describeCountry("Sweden", 10, "Stockholm");
const country3 = describeCountry("Norway", 5, "Oslo");

console.log(country1);
console.log(country2);
console.log(country3);
