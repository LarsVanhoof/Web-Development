const setup = () => {
    filledForm();
}

const filledForm = () => {
    let roker = document.getElementById("isRoker").value;
    let output = "is "
    if(roker === true){
        output += "een";
    }
    else{
        output += "geen";
    }
    output = " roker\n";
    let moedertaal = document.getElementsByName("moedertaal");
    for (let i = 0; i < moedertaal.length; i++){
        if (moedertaal[i].checked){
            console.log("moedertaal is" + moedertaal[i].value);
        }
    }
    let favoriteBuurland = document.getElementById("favorieteBuurland");
    output = "favoriete buurland is ";
    for (let i = 0; i < moedertaal.length; i++){
        if(favoriteBuurland[i].selected){
            output += favoriteBuurland[i].value;
        }
    }
    console.log(output);
}

window.addEventListener("load", setup);