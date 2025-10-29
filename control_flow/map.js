const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers.map( (num) => { return num + 10}) // map returns an array

const newNums = myNumers
                .map((num) => num * 10 ) // map performs operation on num
                .map( (num) => num + 1)  // here chaining is getting performed
                .filter( (num) => num >= 40) // filter returns for the given true conditions

console.log(newNums);
