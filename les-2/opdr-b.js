var dag = "Zondag";   // current week day

if (dag === "Maandag" || dag === "Dinsdag" || dag === "Woensdag" || dag === "Donderdag" || dag === "Vrijdag") {
    console.log("Ik moet naar school");
} else if (dag === "Zaterdag" || dag === "Zondag") { 
    console.log("Lekker uitslapen!");
}