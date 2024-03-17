const setup = () => {
    let gegevens = document.getElementById("submit");
    gegevens.addEventListener("click", getResult);
}

const getResult = () => {
    let output = "";
    output = document.getElementById("isRoker");
    output = "is";
    if(output){
        output += " een";
    }
    else{
        output += " geen";
    }
    output += " roker\n";

    output += "moedertaal is ";
    let moedertaal = document.getElementsByName("moedertaal");
    for(let i = 0; i < moedertaal.length; i++){
        if(moedertaal[i].checked){
            output += moedertaal[i].value;
        }
    }
    output += "\n";

    output += "favourite buurland is ";
    let buurland = document.getElementById("buurland").options;
    for(let i = 0; i < buurland.length; i++){
        if(buurland[i].checked){
            output += buurland[i].value;
        }
    }
    output += "\n";

    output += "bestelling bestaat uit ";
    let bestelling = document.getElementById("bestelling").options;
    for(let i = 0; i < bestelling.length; i++){
        if(bestelling[i].checked){
            output += bestelling[i].value;
        }
    }
    console.log(output);
}


window.addEventListener("load", setup);