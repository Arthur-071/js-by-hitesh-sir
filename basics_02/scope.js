// var c = 300  // global scope of console (browser) is differnt from global scope of node.js
let a = 300     // {} curly braces indicates a scope in js
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

--------------------------------------------------------------------------------------------------------------------------------------------------------------------

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username); //  executable since website is in the scope
    }
    console.log(website); // not executable since website is out of the scope

     two()

}

one()

if (true) {   // child can access parents but parents cant access their children
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))  // here the function is accessible

function addone(num){
    return num + 1
}



addTwo(5)  // concept of hoisting , here the function is not accessible due to const 
const addTwo = function(num){
    return num + 2
}
