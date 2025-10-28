const tinderUser = new Object()  // declared as singelton object
const tinderUser = {}  // declared as non singelton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname); // ? is used in case API for safety

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
const obj3 = Object.assign({}, obj1, obj2, obj4) // {} is used for the safety

const obj3 = {...obj1, ...obj2} // mostly used in the industry with spread operator same concept in array as well
// console.log(obj3);


const users = [   // in case of database we get an array of objects
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email // accesung the element of the first object
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // return array of keys from database
console.log(Object.values(tinderUser)); // return array of values from database
console.log(Object.entries(tinderUser)); // return both keys and values in an array less commonly used 

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //boolean type

------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                              // object destructure

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course // destructuring of the object used in react framework and javascript

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[                      // API files comes in JSON file
    {},                //  json formatter and randomuser me
    {},
    {}
]
