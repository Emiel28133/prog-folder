var readlineSync = require("readline-sync")

var geboortejaar = readlineSync.question("welk jaar ben je gebooren?");

var geboortemaand = readlineSync.question("welke maand ben je gebooren?");

var geboortedag = readlineSync.question("welke dag ben je gebooren?");

let now = new Date();
let birth = new Date(geboortejaar, geboortemaand, geboortedag); 
let miliseconds = now-birth;

let dagen =(miliseconds / 86400000);
let weken =(dagen /7);
let jaren =(weken / 52);
console.log(Math.floor(jaren));