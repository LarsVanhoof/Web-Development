const setup = () => {
    omzetting();
}

const omzetting = () => {

    var zin = "Gisteren zat de jongen op de stoep en at de helft van de appel"

    var woorden = zin.split(' ');

    for(let i = 0; i < woorden.length; i++){
        var woord = woorden[i];
        if(woord.toLowerCase() === "de"){
            woorden[i] = "het";
        }
    }
    zin = woorden.join(' ');
    console.log(zin);
}


window.addEventListener("load", setup);