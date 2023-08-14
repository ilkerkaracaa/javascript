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

// let army = {
//   minAge: 18,
//   maxAge: 27,
//   canJoin(user) {
//     return user.age >= this.minAge && user.age < this.maxAge;
//   },
// };

// let users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

// // find users, for who army.canJoin returns true
// let soldiers = users.filter((user) => army.canJoin(user));

// alert(soldiers.length); // 2
// alert(soldiers[0].age); // 20
// alert(soldiers[1].age); // 23

// function camelize(string) {
//   let result = "";
//   let arr = string.split("-");
//   for (let value of arr) {
//     if (arr[0] === value) {
//       result += value;
//       continue;
//     }
//     result += value.charAt(0).toUpperCase() + value.slice(1);
//   }
//   alert(result);
// }

// camelize("background-color");
// camelize("list-style-image");
// camelize("-webkit-transition");

// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];

//     // remove if outside of the interval
//     if (val < a || val > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// alert(arr); // [3, 1]

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => a - b);

// alert(arr);

// function Calculator() {
//   this.methods = {
//     "-": (a, b) => a - b,
//     "+": (a, b) => a + b,
//   };

//   this.calculate = function (str) {
//     let split = str.split(" "),
//       a = +split[0],
//       op = split[1],
//       b = +split[2];

//     if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }

//     return this.methods[op](a, b);
//   };

//   this.addMethod = function (name, func) {
//     this.methods[name] = func;
//   };
// }

// let powerCalc = new Calculator();
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert(result); // 8

// let obj = {
//   name: "John",
//   age: 30,
// };

// let arr = Object.entries(obj);
// alert(arr);

// let map = new Map(Object.entries(obj));

// alert(map); // John

// function unique(arr) {
//   return Array.from(new Set(arr));
// }

// let values = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];

// alert(unique(values)); // Hare, Krishna, :-O

// function sumSalaries(salaries) {
//   let sum = 0;
//   for (let salary of Object.values(salaries)) {
//     sum += salary;
//   }

//   return sum; // 650
// }

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// alert(sumSalaries(salaries)); // 650

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200,
// };

// let { title, width, height } = options;

// alert(title); // Menu
// alert(width); // 100
// alert(height); // 200

// let user = {
//   name: "John",
//   years: 30,
// };

// let { name, years: age, isAdmin = false } = user;

// alert(name); // John
// alert(age); // 30
// alert(isAdmin); // false

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// function topSalary(obj) {
//   let maxSalaries = 0;
//   let name;
//   for (const [key, value] of Object.entries(obj)) {
//     if (value > maxSalaries) {
//       maxSalaries = value;
//       name = key;
//     }
//   }
//   return name;
// }

// alert(topSalary(salaries));

// let date = new Date(2012, 0, 3); // 3 Jan 2012
// alert(getWeekDay(date)); // should output "TU"

// function getWeekDay(date) {
//   switch (date.getDate()) {
//     case 0:
//       alert("MO");
//       break;
//     case 1:
//       alert("TU");
//       break;
//     case 2:
//       alert("WE");
//       break;
//     case 3:
//       alert("TH");
//       break;
//     case 4:
//       alert("FR");
//       break;
//     case 5:
//       alert("SA");
//       break;
//     case 6:
//       alert("SU");
//       break;
//     default:
//       break;
//   }
// }

// function getWeekDay(date) {
//   let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

//   return days[date.getDay()];
// }

// let date = new Date(2014, 0, 3); // 3 Jan 2014
// alert(date.getDay());
// alert(getWeekDay(date)); // FR

// function formatDate(date) {
//   let diff = new Date() - date; // the difference in milliseconds
//   alert(diff);
//   if (diff < 1000) {
//     // less than 1 second
//     return "right now";
//   }

//   let sec = Math.floor(diff / 1000); // convert diff to seconds

//   if (sec < 60) {
//     return sec + " sec. ago";
//   }

//   let min = Math.floor(diff / 60000); // convert diff to minutes
//   if (min < 60) {
//     return min + " min. ago";
//   }

//   // format the date
//   // add leading zeroes to single-digit day/month/hours/minutes
//   let d = date;
//   d = [
//     "0" + d.getDate(),
//     "0" + (d.getMonth() + 1),
//     "" + d.getFullYear(),
//     "0" + d.getHours(),
//     "0" + d.getMinutes(),
//   ].map((component) => component.slice(-2)); // take last 2 digits of every component

//   // join the components into date
//   return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
// }

// alert(formatDate(new Date(new Date() - 1))); // "right now"

// alert(formatDate(new Date(new Date() - 30 * 1000))); // "30 sec. ago"

// alert(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 min. ago"

// // yesterday's date like 31.12.2016 20:00
// alert(formatDate(new Date(new Date() - 86400 * 1000)));

// let user = {
//   name: "John Smith",
//   age: 35,
// };

// let user2 = JSON.parse(JSON.stringify(user));
// alert(user2.age);

// function sumTo(n) {
//   if (n === 1) {
//     return n;
//   } else {
//     return n + sumTo(n - 1);
//   }
// }

// alert(sumTo(100)); // 5050

// function factorial(n) {
//   if (n === 1) {
//     return n;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// alert(factorial(5)); // 120

// function fib(n) {
//   let a = 1;
//   let b = 1;
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }

// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757

// let arr = [2, 23, 4, 5, 6, 7];

// for (const iterator of arr) {
//   alert(iterator);
// }

// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// alert(sum(5)(-1));

// let x = 1;

// function func() {
//   console.log(x); // ?

//   let x = 2;
// }

// func();

/* .. your code for inBetween and inArray */
// let arr = [1, 2, 3, 4, 5, 6, 7];

// alert(arr.filter(inBetween(3, 6))); // 3,4,5,6

// alert(arr.filter(inArray([1, 2, 10]))); // 1,2

// function inBetween(a, b) {
//   return function (x) {
//     return x >= a && x <= b;
//   };
// }

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" },
// ];

// function byField(fieldName) {
//   return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
// }

// alert(users.sort(byField("name")));
// alert(users.sort(byField("age")));
// console.log(
//   "I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?"
// ); // line break
// console.log("Days\tTopics\tExercises");
// console.log("Day 1\t3\t5");
// console.log("Day 2\t3\t5");
// console.log("Day 3\t3\t5");
// console.log("Day 4\t3\t5");
// console.log("This is a backslash  symbol (\\)"); // To write a backslash
// console.log('In every programming language it starts with "Hello, World!"');
// console.log("In every programming language it starts with 'Hello, World!'");
// console.log("The saying 'Seeing is Believing' isn't correct in 2020");

// let string = "JavaScript";
// console.log(string.substr(4, 6)); // Script

// const person = {
//   firstName: "Asabeneh",
//   lastName: "Yetayeh",
//   age: 250,
//   country: "Finland",
//   city: "Helsinki",
//   skills: [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Node",
//     "MongoDB",
//     "Python",
//     "D3.js",
//   ],
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// person.nationality = "Ethiopian";
// person.country = "Finland";
// person.title = "teacher";
// person.skills.push("Meteor");
// person.skills.push("SasS");
// person.isMarried = true;

// person.getPersonInfo = function () {
//   let skillsWithoutLastSkill = this.skills
//     .splice(0, this.skills.length - 1)
//     .join(", ");
//   let lastSkill = this.skills.splice(this.skills.length - 1);

//   let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
//   let fullName = this.getFullName();
//   let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;
//   return statement;
// };
// console.log(person);
// console.log(person.getPersonInfo());

// a callback function, the name of the function could be any name
// const callback = (n) => {
//   return n ** 2;
// };
// // function that takes other function as a callback
// function cube(callback, n) {
//   return callback(n) * n;
// }
// console.log(cube(callback, 3));

// const names = [11, "Mathias", "Elias", "Brook"];
// const areAllStr = names.every((name) => typeof name === "string"); // Are all strings?

// console.log(areAllStr);

// const names = [11, "Mathias", "Elias", "Brook"];
// const bools = [false, true, true, true];

// const areSomeTrue = bools.some((b) => b === true);

// console.log(areSomeTrue); //true
// const areAllStr = names.some((name) => typeof name === "number"); // Are all strings ?
// console.log(areAllStr); // false

// let a = [1, 2, 3, 4, 5];
// let b = [3, 4, 5, 6];

// let A = new Set(a);
// let B = new Set(b);

// let c = a.filter((num) => B.has(num));
// console.log(c);

// let C = new Set(c);

// console.log(C);

// const person = {
//   firstName: "Asabeneh",
//   lastName: "Yetayeh",
//   age: 250,
//   country: "Finland",
//   job: "Instructor and Developer",
//   skills: [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Redux",
//     "Node",
//     "MongoDB",
//     "Python",
//     "D3.js",
//   ],
//   languages: ["Amharic", "English", "Suomi(Finnish)"],
// };
// // Let us create a function which give information about the person object without destructuring

// const getPersonInfo = (obj) => {
//   const skills = obj.skills;
//   const formattedSkills = skills.slice(0, -1).join(", ");
//   const languages = obj.languages;
//   const formattedLanguages = languages.slice(0, -1).join(", ");

//   personInfo = `${obj.firstName} ${obj.lastName} lives in ${
//     obj.country
//   }. He is  ${obj.age} years old. He is an ${
//     obj.job
//   }. He teaches ${formattedSkills} and ${
//     skills[skills.length - 1]
//   }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

//   return personInfo;
// };

// console.log(getPersonInfo(person));

// const pattern = /[a].+/g; // . any character, + any character one or more times
// const txt = "Apple and banana are fruits";
// const matches = txt.match(pattern);

// console.log(matches); // ['and banana are fruits']

// const txt = "This regular expression example was made in December 6,  2019.";
// const pattern = /\\b\w{4}\b/g; //  exactly four character words
// const matches = txt.match(pattern);
// console.log(matches); //['This', 'made', '2019']

// let patternn = /^[A-Z][a-z]{3,6}$/;
// let name = "Asabeneh";
// let result = patternn.test(name);

// console.log(result); // true

// console.log("%c30 Days Of JavaScript", "color:red"); // log output is green
// console.log(
//   "%c30 Days%c %cOf%c %cJavaScript%c",
//   "color:green",
//   "",
//   "color:red",
//   "",
//   "color:yellow"
// ); // log output green red and yellow text
