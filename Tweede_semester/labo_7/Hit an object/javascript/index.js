let global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    MOVE_DELAY: 1000,
    score: 0,
    timeoutId: 0
};

const setup = () => {
    let startButton = document.getElementById("start");
    startButton.addEventListener("click", startGame);
};

const startGame = () => {
    let image = document.getElementById("afb");
    imageFunction();
};

const imageFunction = () => {
    let image = document.getElementById("afb");
    randomImage(image);
    moveImage(image);
    global.timeoutId = setTimeout(imageFunction, global.MOVE_DELAY);
};

const randomImage = (image) => {
    let randomImg = Math.floor(Math.random() * global.IMAGE_COUNT);
    image.setAttribute("src", global.IMAGE_PATH_PREFIX + randomImg + global.IMAGE_PATH_SUFFIX);
};

const clickImage = (event) => {
    let image = event.target;
    clearTimeout(global.timeoutId);
    if (image.getAttribute("src").includes("0")) {
        window.alert("Game over.");
    }
};

const moveImage = (image) => {
    let newX = Math.floor(Math.random() * (600 - global.IMAGE_SIZE));
    let newY = Math.floor(Math.random() * (800 - global.IMAGE_SIZE));

    image.style.left = newX + "px";
    image.style.top = newY + "px";
};

window.addEventListener("load", setup);
