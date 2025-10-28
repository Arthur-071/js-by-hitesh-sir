// singleton
Object.create //object declared as constructor with singelton ( interview )

// object literals -----------------------------------------------------------------------------------------------------------------------------------

const mySym = Symbol("key1") // ( interview )


const JsUser = {  // each key is treated  as a string in here
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",  // ( interview )
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email) // most commonly used
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
console.log(JsUser[mySym])  // ( interview )

JsUser.email = "hitesh@chatgpt.com"
Object.freeze(JsUser) // no chnages allowed after that
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // back tick is very important to access  variables
                                                // here this keyword is accesing the object jsuser
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
