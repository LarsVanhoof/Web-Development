const setup = () => {
    omzetten();
    parseMethode();
}

let student1 = {
    naam: "Damon Oliva",
    geboorte: new Date(1993, 9 , 17)

};

const omzetten = () => {
    let tekst = JSON.stringify(student1);
    console.log(tekst);
}

let parseMethode = () => {
    let student2 = JSON.parse('{"naam":"Damon Oliva","geboorte":"1993-10-16T23:00:00.000Z"}')
    console.log(student2.naam);
};




window.addEventListener("load", setup);