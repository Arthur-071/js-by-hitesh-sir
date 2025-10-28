const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  // this keyword is used for current variables of the object
        console.log(this); // here this keyword prints each keys and values of the object
    }

}

user.welcomeMessage()
user.username = "sam" // changes the value inside the user object
user.welcomeMessage() 

console.log(this); // here it returns {} an empty object in the node environment

function chai(){
    let username = "hitesh"
    console.log(this); // it prints a lot of values stored in THIS but only inside the function
}

chai()

const chai = function () {
    let username = "hitesh"
    console.log(this.username); // returns undefined
}

const chai =  () => { // called as arrow function
    let username = "hitesh"
    console.log(this); // here it returns {} an empty object in the node environment
}


// chai()

const addTwo = (num1, num2) => { // explicit return function --- return is mandatpry
    return num1 + num2
}

const addTwo = (num1, num2) =>  num1 + num2 // true but not recommended

const addTwo = (num1, num2) => ( num1 + num2 ) // implicit return function ----- return is not required ----- USED IN REACT.js

const addTwo = (num1, num2) => ({username: "hitesh"}) // prints the object insude


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
