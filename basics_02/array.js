// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods -------------------------------------------------------------------

// myArr.push(6)
// myArr.push(7)
myArr.pop() // removes the last element

myArr.unshift(9) // add 9 to first element
myArr.shift()    // removes the first element and return that element

console.log(myArr.includes(9)); // boolean type
// console.log(myArr.indexOf(3));

const newArr = myArr.join() //converts in to a string and returns a string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // 3rd index is excluded return part of the array does change the original array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // 3rd index is included return part of the array but changes the original array
console.log("C ", myArr);       // array is shortend with elements left from 4th index to last;
console.log(myn2);