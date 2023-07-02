"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");
*/
/*
function logger() {
  console.log("My name is İlker");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
*/
/*
// Function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
};
const age2 = calcAge2(1991);

console.log(age1, age2);
*/
/*
const calcAge = (birthYear) => 2023 - birthYear;
const age = calcAge(1999);
console.log(age);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1999, "İlker"));
console.log(yearsUntilRetirement(1980, "Bob"));
*/
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/
/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "İlker";
const ilker = [firstName, "Karaca", 2023 - 1999, "student", friends];
console.log(ilker);

// Exercise
const calcAge = function (birthYeah) {
  return 2023 - birthYeah;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);
*/
/*
const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
*/
/*
const ilker = {
  firstName: "İlker",
  lastName: "Karaca",
  age: 2023 - 1999,
  job: "student",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(ilker);
console.log(ilker.lastName);
console.log(ilker["lastName"]);

const nameKey = "Name";
console.log(ilker["first" + nameKey]);
console.log(ilker["last" + nameKey]);

// console.log(ilker.'last' + nameKey);

const interestedIn = prompt(
  "What do you want to know about İlker? Choose between firstName, lastName, age, job, and friends"
);

if (ilker[interestedIn]) {
  console.log(ilker[interestedIn]);
}

ilker.location = "Turkey";
ilker["twitter"] = "@ilkerkrc";
console.log(ilker);

// Challenge
// "İlker has 3 friends, and his best friend is called Michael"
console.log(
  `${ilker.firstName} has ${ilker.friends.length} friends, and his best friend is called ${ilker.friends[0]}`
);
*/
/*
const ilker = {
  firstName: "İlker",
  lastName: "Karaca",
  birthYear: 1999,
  job: "student",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: false,

  // calcAge: function (birthYear) {
  //   return 2023 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2023 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
};

// console.log(ilker.calcAge(1999));
// console.log(ilker["calcAge"](1999));
console.log(ilker.calcAge());

// Challenge
// "İlker is a 46-year old teacher, and he has a driver's license"
console.log(
  `${ilker.firstName} is a ${ilker.age}-year old ${ilker.job}, and he has ${
    ilker.hasDriversLicense ? "a" : "no"
  } driver's license`
);
*/
/* Write your code below. Good luck! 🙂 */
////
/*
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

///////
mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`
  );
} else {
  console.log("They have the same BMI");
}
*/
/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}
*/
/*
const ilkerArray = [
  "İlker",
  "Karaca",
  2023 - 1999,
  "student",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i < ilkerArray.length; i++) {
  console.log(ilkerArray[i], typeof ilkerArray[i]);

  // Filling types array
  // types[i] = typeof ilkerArray[i];
  types.push(typeof ilkerArray[i]);
}

console.log(types);

const years = [1999, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}
console.log(ages);

// Continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < ilkerArray.length; i++) {
  if (typeof ilkerArray[i] !== "string") continue;

  console.log(ilkerArray[i], typeof ilkerArray[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < ilkerArray.length; i++) {
  if (typeof ilkerArray[i] === "number") break;

  console.log(ilkerArray[i], typeof ilkerArray[i]);
}
*/
/*
const ilkerArray = [
  "İlker",
  "Karaca",
  2023 - 1999,
  "student",
  ["Michael", "Peter", "Steven"],
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = ilkerArray.length - 1; i >= 0; i--) {
  console.log(i, ilkerArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}
*/
