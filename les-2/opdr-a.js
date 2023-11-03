var readlineSync = require("readline-sync");

var leeftijd = readlineSync.question("age pls ");

if (leeftijd >= 18 ) {

    var id = readlineSync.question("proof? ")
        if (id == "ja") {
        console.log("yesh")
        } 
}   else {
    
    console.log("scrum!")
}