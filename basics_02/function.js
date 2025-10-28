
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5) // only executed if function has declared return inside it

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){ // if no argument pased default value "sam" is taken
    if(!username){ // if default not given then this line will be executed
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in` // undefined if executed
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

--------------------------------------------------------------------------------------------------------------------------------------------------------------------

function calculateCartPrice(val1, val2, ...num1){ // val1,val2 takes values 100 and 200
    return num1                                   // rest values goes to rest operator( ...num1 )
}                                                 // returns an array

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
