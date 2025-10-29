// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"  // if break not mentioned then it will execute all the code except default one 
                       // mainly used in redux
switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}
