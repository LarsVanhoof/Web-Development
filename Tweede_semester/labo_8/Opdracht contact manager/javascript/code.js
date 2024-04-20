let personen = [];
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};
// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");
    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();
    if (checkError()){
        let txtVoornaam = document.getElementById("txtVoornaam").value;
        let txtFamilienaam = document.getElementById("txtFamilienaam").value;
        let txtGeboorteDatum = document.getElementById("txtGeboorteDatum").value;
        let txtEmail = document.getElementById("txtEmail").value;
        let txtAantalKinderen = document.getElementById("txtAantalKinderen").value;
            let persoon = {
                voornaam: txtVoornaam,
                familienaam: txtFamilienaam,
                geboorteDatum: new Date(txtGeboorteDatum),
                email: txtEmail,
                aantalKinderen: parseInt(txtAantalKinderen)
            };
        personen.push(persoon);
        }
        createSelect();
        clearForm();
    // indien ok, bewaar de ingegeven data.
    // een nieuw aangemaakte persoon voegen we toe
    // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
}

const createSelect = () => {
    let select = document.getElementById("lstPersonen");
    select.innerHTML = "";
    for (let i = 0; i < personen.length; i++){
        let person = personen[i];

        let option = document.createElement("option");
        option.setAttribute("id", i + "");
        option.setAttribute("value", JSON.stringify(person));
        option.textContent = person.voornaam + " " + person.familienaam;

        select.appendChild(option);

        option.addEventListener("click", fillForm);
    }
}

const editForm = (id, voornaam, familienaam, geboorteDatum, email, aantalKinderen) => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
    let txtEmail = document.getElementById("txtEmail");
    let txtAantalKinderen = document.getElementById("txtAantalKinderen");
    txtVoornaam.value = voornaam;
    txtFamilienaam.value = familienaam;
    txtGeboorteDatum.value = geboorteDatum;
    txtEmail.value = email;
    txtAantalKinderen.value = aantalKinderen;
}

const clearForm = (event) => {
    editForm("","","","","","");
}

const checkError = () => {
    let errorVoornaam = document.getElementById("errVoornaam").textContent;
    let errorFamilienaam = document.getElementById("errFamilienaam").textContent;
    let errorGeboorteDatum = document.getElementById("errGeboorteDatum").textContent;
    let errorEmail = document.getElementById("errEmail").textContent;
    let errorAantalKinderen = document.getElementById("errAantalKinderen").textContent;
    if (errorVoornaam !== ""){
        return false;
    }
    else if (errorFamilienaam !== ""){
        return false;
    }
    else if (errorGeboorteDatum !== ""){
        return false;
    }
    else if (errorEmail !== ""){
        return false;
    }
    else if (errorAantalKinderen !== ""){
        return false;
    }
    return true;
}

const fillForm = (event) => {
    let option = event.target;
    let person = JSON.parse(option.value);
    let geboorteDatum = "";
    if (person.geboorteDatum !== null) {
        geboorteDatum = person.geboorteDatum.substring(0, person.geboorteDatum.indexOf("T"));
    }

    editForm(option.id, person.voornaam, person.familienaam, geboorteDatum, person.email, person.aantalKinderen);
}


// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};


// onze setup functie die de event listeners registreert

window.addEventListener("load", setup);