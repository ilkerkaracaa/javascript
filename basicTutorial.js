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

let calculator = {
  a: 0,
  b: 0,
  read() {
    this.a = +prompt("enter a number");
    this.b = +prompt("enter a number");
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
