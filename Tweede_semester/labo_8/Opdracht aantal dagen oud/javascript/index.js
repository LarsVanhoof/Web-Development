const setup = () => {
    const geboortedatum = new Date(2005, 1, 18);
    let vandaag= new Date();
    let eindresultaat = (vandaag - geboortedatum)/86400000;
    //Ik had uitgerekend hoeveel milliseconden er in een dag zaten, vandaar de 86 400 000.
    console.log(Math.round(eindresultaat));
}

window.addEventListener("load", setup);