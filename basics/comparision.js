// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); datatype conversion takes place
// console.log("02" > 1); //True

console.log(null > 0); //false
console.log(null == 0); // datatype conversion does not takes place (false)
console.log(null >= 0); //true

console.log(undefined == 0); //false
console.log(undefined > 0);  //false
console.log(undefined < 0);  //false

// === 

console.log("2" === 2); //no conversion allowed (false)
