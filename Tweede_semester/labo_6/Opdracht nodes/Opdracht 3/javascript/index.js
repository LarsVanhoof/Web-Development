const setup = () => {
    let div = document.getElementById("div");
    let createPElement = document.createElement("p");
    div.appendChild(createPElement);
}




window.addEventListener("load", setup);