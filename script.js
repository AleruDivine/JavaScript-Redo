 'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

function logger() {
  console.log('My name is Jonas');
}

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);







Arrow functions

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));


Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));


 Reviewing Functions
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));

Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

Add 
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

Remove 
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
*/

Objects
const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};


Dot vs. Bracket
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey)

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);


Object Methods

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYeah: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  calcAge: function (birthYeah) {
    return 2037 - birthYeah;
  }

  calcAge: function () {
    // console.log(this);
    return 2037 - this.birthYeah;
  }

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);


console.log(jonas.getSummary());
*/

