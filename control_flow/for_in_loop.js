const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`); // it prints the the values of the object
}

for (const key in myObject) {
    console.log(key); // it prints the key vakue only 
}
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]); // it prints the vakues of the object
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

for (const key in map) { // not iteratable for the map
    console.log(key);
}
