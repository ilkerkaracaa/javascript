/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

let firstName = "İlker";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let simple = "Simple";
let $function = 27;

let PI = 3.1415;
let person = "İlker";

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "Programmer";
let job2 = "Teacher";

console.log(myFirstJob);

//Challenge 1
let country = "Türkiye";
let continent = "Avrupa";
let population = 82;

console.log("Ülke:", country);
console.log("Kıta:", continent);
console.log("Nüfus (milyon):", population);
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "true");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);
console.log(typeof null);
//Challenge 2
let isIsland = false;
let language;
let country = "Türkiye";
let population = 82;

console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);

*/
/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = "programmer";
job = "teacher";

lastName = "Karaca";
console.log(lastName);
*/
/*
const now = 2037;
const ageİlker = now - 1991;
const ageSarah = now - 2018;
console.log(ageİlker, ageSarah);

console.log(ageİlker * 2, ageİlker / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "İlker";
const lastName = "Karaca";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

// Comparison operators
console.log(ageİlker > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/
/*
const now = 2037;
const ageİlker = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageİlker + ageSarah) / 2;
console.log(ageİlker, ageSarah, averageAge);
*/
/*
const firstName = "İlker";
const job = "student";
const birthYear = 1999;
const year = 2023;

const ilker =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(ilker);

const ilkerNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(ilkerNew);

console.log(`Just a regular string...`);

console.log("String with \n multiple \n lines");

console.log(`String with
multiple
lines`);
*/
/*
const age = 15;

if (age >= 18) {
  console.log("İlker can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`İlker is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1999;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/
/*
//type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("İlker"));
console.log(typeof NaN);

console.log(String(24), 24);

// Type coercion
console.log("I am " + 24 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" > "18");

let n = "1" + 1; // '11'
n = n - 1;
console.log(n);

console.log(2 + 3 + 4 + "5");

console.log("10" - "4" - "3" - 2 + "5");
*/
/*
console.log(0);
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean("İlker"));
console.log(Boolean({}));

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/
/*
const age = 18;
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 24) {
  // 23 === 23
  console.log("Cool! 24 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 24) console.log("Why not 23?");
*/
/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("İlker is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("İlker is able to drive!");
} else {
  console.log("Someone else should drive...");
}
*/
