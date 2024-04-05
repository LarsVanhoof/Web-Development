let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    DUPLICATE_KAARTEN: 2,
    PATH_PREFIX: "../images/",
    PATH_SUFFIX: ".png",
    score: 0,
    turnedOver: [],
    images: []
};

const cards = ["kaart1.png", "kaart2.png", "kaart3.png", "kaart4.png", "kaart5.png", "kaart6.png"];

const setup = () => {
    makeElements();
};

const makeElements = () => {
    showCards();
    let memoryBoard = document.getElementById("memoryBoard");
    makeFormat(memoryBoard);
    let sizeArray = cards.length;
    for (let i = 0; i < sizeArray; i++){
        let kaart = getRandomCard();
        document.getElementById("memoryBoard").appendChild(kaart);
        kaart.addEventListener("click", tryTurnOver);
    }
};

const getRandomCard = () => {
    let randomIndex = Math.floor(Math.random() * cards.length);
    return cards.splice(randomIndex, 1)[0];
};

const showCards = () => {
    for (let i = 0; i < global.AANTAL_KAARTEN; i++){
        for (let a = 0; a < global.DUPLICATE_KAARTEN; a++){
            let kaart = document.createElement("div");
            kaart.classList.add("matchFigure");
            kaart.setAttribute("data-content", cards[i]);
            cards.push("kaart");
        }
    }
};

const makeFormat = (field) => {
    let countCards = global.AANTAL_KAARTEN * global.DUPLICATE_KAARTEN;
    if (countCards === global.AANTAL_HORIZONTAAL * global.AANTAL_VERTICAAL){
        field.style.gridTemplateColumns = "repeat(" + global.AANTAL_HORIZONTAAL + ", auto)";
        field.style.gridTemplateRows = "repeat(" + global.AANTAL_VERTICAAL + ", auto)";
    }
};

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
};

const show = (kaart) => {
    kaart.classList.add("show");
    turnedOver.push(kaart);
};

const hide = (kaart) => {
    let index = global.turnedOver.indexOf(kaart);
    if (index >= 0){
        global.turnedOver.splice(index, 1);
    }
};

const checkCard = () => {
    let Cards = [];

    for (let i = 0; i < global.turnedOver.length; i++){
        let cardContent = global.turnedOver[i].getAttribute("data-content");
        Cards.push(cardContent);
    }

    if (Cards.length > 0){
        let equal = true;
        let cardContent = Cards[0];
        for (let i = 1; i < Cards.length && equal; i++){
            if (cardContent !== Cards[i]){
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

};

const gameOver = () => {
    window.alert("Congratulations, you completed the game!");
};

window.addEventListener("load", setup);
