// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // executed directly from here

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') // parameter is passed from here to name

// simple iife
