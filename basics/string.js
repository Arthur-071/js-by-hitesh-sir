const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");  // it considers everything as string

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__); // just for representation purposes


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) // last index is not included
console.log(newString);

const anotherString = gameName.slice(-8, 4) // reverse the string
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); // removes the extra spaces

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) //boolean type

console.log(gameName.split('-')); // converts into an array on the basis of '-'
