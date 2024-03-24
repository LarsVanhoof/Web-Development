const setup = () => {
    validateForm();
}

    const validateForm = () => {
    let voornaam = document.getElementById("voornaam").value;
    let familienaam = document.getElementById("familienaam").value;
    let geboortedatum = document.getElementById("geboortedatum").value;
    let email = document.getElementById("email").value;
    let aantal_kinderen = document.getElementById("aantal_kinderen").value;

    let voornaamError = document.getElementById("voornaamError");
    if (voornaam.length > 30) {
        voornaamError.innerHTML = "Max. 30 karakters";
    }
    else {
        voornaamError.innerHTML = "";
    }

    let familienaamError = document.getElementById("familienaamError");
    if (familienaam === "") {
        familienaamError.innerHTML = "Verplicht veld";
    }
    else if (familienaam.length > 50) {
        familienaamError.innerHTML = "Max. 50 karakters";
    }
    else {
        familienaamError.innerHTML = "";
    }

    let geboortedatumError = document.getElementById("geboortedatumError");
    let dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (geboortedatum === "") {
        geboortedatumError.innerHTML = "Verplicht veld";
    }
    else if (!dateRegex.test(geboortedatum)) {
        geboortedatumError.innerHTML = "Formaat is niet jjjj-mm-dd";
    }
    else {
        geboortedatumError.innerHTML = "";
    }

    let emailError = document.getElementById("emailError");
    let emailRegex = /\S+@\S+\.\S+/;
    if (email === "") {
        emailError.innerHTML = "Verplicht veld";
    }
    else if (!emailRegex.test(email)) {
        emailError.innerHTML = "Geen geldig email adres";
    }
    else {
        emailError.innerHTML = "";
    }

    let aantalKinderenError = document.getElementById("aantalKinderenError");
    if (isNaN(aantal_kinderen) || aantal_kinderen < 0) {
        aantalKinderenError.innerHTML = "Is geen positief getal";
    }
    else if (aantal_kinderen >= 99) {
        aantalKinderenError.innerHTML = "Is te vruchtbaar";
    }
    else {
        aantalKinderenError.innerHTML = "";
    }

}