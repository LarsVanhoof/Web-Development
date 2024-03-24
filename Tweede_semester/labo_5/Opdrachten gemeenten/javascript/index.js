let gemeentes;

const setup = () => {
    gemeentes = [];
    toevoegenGemeenten();
    toevoegenGemeenteArray();
}

const toevoegenGemeenten = () => {
    let gemeentes = [];
    input = window.prompt("gemeente:", "stop");
    while(input !== "stop"){
            gemeentes.push(input);
    }
    return gemeentes.sort();
}

const toevoegenGemeenteArray = () => {
    let array = toevoegenGemeenten();
    let gemeente = document.getElementById("gemeente");
    for(let i = 0; i < array.length; i++){
        gemeente.innerHTML += "<option value=\"" + array[i] + "\">" + array[i] + "</option>";
    }
}


window.addEventListener("load", setup);