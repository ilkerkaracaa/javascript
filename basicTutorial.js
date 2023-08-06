// const user = {};
// user.name = "John";
// user.surName = "Smith";
// user.name = "Pete";
// delete user.name;

// function isEmpty(obj) {
//   for (let key in obj) {
//     name: "fasf";
//     return false;
//   }
//   return true;
// }

// const anan = {};
// console.log(isEmpty(anan));

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;

// for (let key in salaries) {
//   sum += salaries[key];
// }

// console.log(sum);

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
//   anan: "fafa",
// };

// console.log(salaries);

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
// }

// multiplyNumeric(salaries);

// console.log(salaries);

// let calculator = {
//   a: 0,
//   b: 0,
//   read() {
//     this.a = +prompt("enter a number");
//     this.b = +prompt("enter a number");
//   },

//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     // shows the current step
//     alert(this.step);
//     return this;
//   },
// };

// ladder.up().up().down().showStep().down().showStep();

// function Calculator() {
//   this.read = function () {
//     this.a = +prompt("enter a number");
//     this.b = +prompt("enter a number");
//   };

//   this.sum = function () {
//     return this.a + this.b;
//   };

//   this.mul = function () {
//     return this.a * this.b;
//   };
// }

// let calculator = new Calculator();
// calculator.read();

// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());

// function Accumulator(number) {
//   this.value = number;
//   this.read = function () {
//     this.value += +prompt("How much to add?", 0);
//   };
// }

// let accumulator = new Accumulator(1); // initial value 1

// accumulator.read(); // adds the user-entered value
// accumulator.read(); // adds the user-entered value

// alert(accumulator.value); // shows the sum of these values

// let numberOne = +prompt("enter a number");
// let numberTwo = +prompt("enter a number");
// alert(numberOne + numberTwo);

// function readNumber() {
//   let num;

//   do {
//     num = prompt("Enter a number please?", 0);
//     console.log(!isFinite(num));
//   } while (!isFinite(num));

//   if (num === null || num === "") return null;

//   return +num;
// }

// alert(`Read: ${readNumber()}`);

// function random(min, max) {
//   return min + Math.random() * max - 1;
// }

// alert(random(1, 5));
// alert(random(1, 5));
// alert(random(1, 5));

// function randomInteger(min, max) {
//   return min + Math.round(Math.random() * max - 1);
// }

// alert(randomInteger(1, 5));
// alert(randomInteger(1, 5));
// alert(randomInteger(1, 5));

// function ucFirst(string) {
//   let firstBigCharacter = string.charAt(0).toUpperCase();
//   let result = firstBigCharacter + string.slice(1);
//   return result;
// }

// console.log(ucFirst("alooo"));

// function checkSpam(string) {
//   if (string.toLowerCase().indexOf("viagra") != -1) {
//     return true;
//   } else if (string.toLowerCase().indexOf("xxx") != -1) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkSpam("buy ViAgRA now"));
// console.log(checkSpam("free xxxxx"));
// console.log(checkSpam("innocent rabbit"));

// function truncate(string, number) {
//   if (string.length > number) {
//     console.log(string.slice(0, number - 1) + "...");
//   } else {
//     console.log(string.slice(0, number));
//   }
// }

// truncate("What I'd like to tell on this topic is:", 20);
// truncate("Hi everyone!", 20);

// function extractCurrencyValue(string) {
//   return Number(string.slice(1));
// }
// alert(extractCurrencyValue("$121") === 121); // true

// let styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// styles[Math.floor((styles.length - 1) / 2)] = "Classics";
// alert( styles.shift() );
// styles.unshift("Rap", "Reggae");

// function sumInput() {
//   let numbers = [];

//   while (true) {
//     let value = prompt("A number please?", 0);

//     // should we cancel?
//     if (value === "" || value === null || !isFinite(value)) break;

//     numbers.push(+value);
//   }

//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

// alert(sumInput());

// let arr = ["t", "e", "s", "t"];

// alert(typeof arr.slice(1, 3)); // e,s (copy from 1 to 3)

// alert(typeof arr.slice(-2)); // s,t (copy from -2 till the end)

// alert(typeof "sdfsdf");

// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
// ];

// let user = users.find((item) => item.id === 1);

// alert(user.name); // John
