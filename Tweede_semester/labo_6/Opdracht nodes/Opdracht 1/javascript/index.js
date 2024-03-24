const setup = () => {
    let teVeranderenTekst = document.querySelectorAll("p");
    for(let i = 0; i < teVeranderenTekst.length; i++){
        teVeranderenTekst[i].textContent = "Good job!";
    }
}


window.addEventListener("load", setup);