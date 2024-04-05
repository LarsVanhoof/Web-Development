let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    KAART_ACHTERKANT: "achterkant_pgn",
    DUPLICATE_KAARTEN: 2,

    PATH_PREFIX: "assets/sounds/",
    PATH_SUFFIX: ".mp3",

    images: [],

    turnedOver: [],
    score: 0,
    countTries: 0
}

const cards = ["kaart1.png", "kaart2.png", "kaart3.png", "kaart4.png", "kaart5.png", "kaart6.png"];

const setup = () => {
    makeElements();
}

const makeElements = () => {
    showCards();
    let memoryBoard = document.getElementById("memoryBoard");
    makeFormat(memoryBoard);
    let sizeCardArray = global.cards.length
    for (let i = 0; i < sizeCardArray; i++){
        let kaart = getRandomCard();
        document.getElementById("memoryBoard").appendChild("kaart");
        kaart.addEventListener("click", tryTurnOver);
    }
}

const getRandomCard = () => {
    let randomIndex = Math.floor(Math.random() * global.cards.length);
    return global.cards.splice(randomIndex, 1)[0];
}

const makeFormat = (field) => {
    let countCards = global.AANTAL_KAARTEN * global.DUPLICATE_KAARTEN;
    if (countCards === global.AANTAL_HORIZONTAAL * global.AANTAL_VERTICAAL){
        field.style.gridTemplateColumns = "repeat(" + global.AANTAL_HORIZONTAAL + ", auto)";
        field.style.gridTemplateRows = "repeat(" + global.AANTAL_VERTICAAL + ", auto)";
    }
    else {
        let horCount = 0;
        for (let i = 1; i < countCards; i++){
            let calc = countCards / i;
            if (calc % 2 === 0 && calc > 2){
                horCount = calc;
            }
        }

        field.style.gridTemplateColumns = "repeat(" + horCount + ", auto)";
    }
}

const showCards = () => {
    for (let i = 0; i < global.AANTAL_KAARTEN; i++){
        for (let a = 0; a < global.DUPLICATE_KAARTEN; a++){
            let kaart = document.createElement("kaart");
            kaart.classList.add("matchFigure");
            kaart.setAttribute("data-sound-file", "" + i);
            global.cards.push("kaart");
        }
    }
}

const tryTurnOver = (event) => {
    if (global.turnedOver.length < global.DUPLICATE_KAARTEN){
        if (global.turnedOver.indexOf(event.target) === -1){
            show(event.target);
        }

        if (global.turnedOver.length > global.DUPLICATE_KAARTEN - 1){
            checkCard();
        }
    }
    else {
        checkCard();
    }
}

const playSound = (kaart) => {
    let card = new Audio(global.PATH_PREFIX + kaart.getAttribute("data-sound-file") + global.PATH_SUFFIX);
    cards.play();
}

const show = (kaart) => {
    showCards(kaart);
    global.turnedOver.push(kaart);
}

const hide = (kaart) => {
    let index = global.turnedOver.indexOf(kaart);
    if (index >= 0){
        global.turnedOver.splice(index, 1);
    }
}

const checkCard = () => {
    global.countTries++;

    let Cards = [];

    for (let i = 0; i < global.turnedOver.length; i++){
        let Cards = global.turnedOver[i].getAttribute("data-sound-file");

        Cards.push(Cards);
    }

    if (Cards.length > 0){
        let equal = true;
        let soundSource = Cards[0];
        for (let i = 1; i < Cards.length && equal; i++){
            if (soundSource !== Cards[i]){
                equal = false;
            }
        }

        let waitTime = 500;
        if (equal){
            waitTime = 200;
            global.score++;

            setTimeout(() => {
                for (let i = 0; i < global.turnedOver.length; i++){
                    global.turnedOver[i].classList.add("hide");
                }
            }, waitTime);

            if (global.score === 6){
                setTimeout(gameOver, 500);
            }
        }

        setTimeout(() => {
            while (global.turnedOver.length > 0){
                hide(global.turnedOver[0]);
            }
        }, waitTime);
    }

}

const gameOver = () => {
    window.alert("Congratulations, you completed the game!");
}

window.addEventListener("load", setup);