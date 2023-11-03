let rs = require("readline-sync");

function stik(){
    let dom = Math.ceil(Math.random() * 100);
    return dom;
}

let hoerenmoeder = stik()
console.log(hoerenmoeder);

let vraag = rs.question("getal? kom op.")

while(vraag != hoerenmoeder){
    while(vraag < hoerenmoeder){
        vraag = rs.question("nee hoger. getal? kom op.")
    }
    
    while(vraag > hoerenmoeder){
        vraag = rs.question("nee lager. getal? kom op.")
    }
}


if (vraag == hoerenmoeder){
    console.log("lekker pik")
}

