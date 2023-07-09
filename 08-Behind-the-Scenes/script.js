'use strict';

/*
function calcAge(birthYear) {
  const age = 2021 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // add(2, 3);
    console.log(output);
  }
  printAge();

  return age;
}
*/
/*
console.log(me);
// console.log(job);
// console.log(year);

var me = 'İlker';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(2021 - birthYear);
  console.log(this);
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2021 - birthYear);
  console.log(this);
};

calcAgeArrow(1991);

const ilker = {
  year: 1998,
  calcAge: function () {
    console.log(this);
    console.log(2021 - this.year);
  },
};

ilker.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = ilker.calcAge;
matilda.calcAge();

const f = ilker.calcAge;
f();
*/
/*

const ilker = {
  firstName: 'İlker',
  year: 1998,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);

    // Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();

    // Solution 3
    // isMillenial: () => {
    //   console.log(this);
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // Solution 4
    // isMillenial: function () {
    //   console.log(this);
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // }.bind(this),

    // isMillenial();
  },
};

ilker.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
*/
