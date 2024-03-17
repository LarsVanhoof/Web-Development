const setup = () => {
    trigram();
}

const trigram = () => {
    const tekst = "onoorbaar";

    for(let i = 0; i < tekst.length-2; i++){
        var value = tekst.substring(i, i + 3);
        console.log(value);
    }
}

window.addEventListener("load", setup);