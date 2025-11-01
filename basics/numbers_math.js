const score = 400
// console.log(score);

const balance = new Number(100) // species thatt ths is a number datatype
// console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1)); // defines the number of decimal places

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); // take 4 digts and round off

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // converts in to indian number system

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
console.log(Math.round(4.6)); // round off the number
console.log(Math.ceil(4.2)); // return 5 in this case
console.log(Math.floor(4.9)); // return 4 in this case
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // print some random number
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //formula to print random number b/w min and max
