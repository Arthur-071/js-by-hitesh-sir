const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) // create array into the array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); accessing the nested array

const allHeros = marvel_heros.concat(dc_heros) // merges both the arrays
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // merge nested array into a single array
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // boolean type
console.log(Array.from("Hitesh")) // convert into an array
console.log(Array.from({name: "hitesh"})) // return empty array [] unless key of the object is specified

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //converts in to an array
