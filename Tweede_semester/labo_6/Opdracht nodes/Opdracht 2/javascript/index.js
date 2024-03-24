const setup = () => {
    let header = document.querySelector("head");
    let createStyle = document.createElement("style");
    createStyle.setAttribute("type", "text/css");
    createStyle.innerHTML = "body { color: red; }";
    header.appendChild(createStyle);

    let listitem = document.querySelectorAll("li");
    for(let i = 0; i < listitem.length; i++){
        listitem[i].classList.add("listitem");
    }

    let body = document.querySelector("body");
    let photo = document.createElement("img");
    photo.setAttribute("src", "images/Lorna_Shore.jpg");
    body.appendChild(photo);
}


window.addEventListener("load", setup);