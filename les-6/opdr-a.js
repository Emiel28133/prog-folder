let readlineSync = require("readline-sync");

let ans = readlineSync.question("speak up numb nuts!");

console.log(mock(ans));

function mock(ans) {
    let owt = "";
    for (let i = 0; i < ans.length; i++) {
        let element = ans[i];
        if (Math.random() < 0.5) {
            element = element.toUpperCase();
        }
        owt += element;
    }
    owt = owt.toString();
    return owt;
}
