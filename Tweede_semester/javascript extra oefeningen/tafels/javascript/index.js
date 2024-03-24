const setup = () => {
    let button = document.getElementById("button");

    button.addEventListener("click", toonTafels);
}

const toonTafels = () => {
    let input = document.getElementById("input");
    if (isNaN(input.value)){
        alert(input.value + " is geen getal!!!!");
    }
    else {
        let output = document.getElementById("output");
        let tablediv = document.createElement("div");
        tablediv.classList.add("tableDiv");
        output.appendChild(tablediv)

        let tableHead = document.createElement("div");
        let time = new Date().toTimeString().substring(0, 8);
        tableHead.textContent = "Tafels van " + input.value + " aangemaakt op: " + time;
        tablediv.appendChild(tableHead);

        for (let i = 1; i <= 10; i++){
            let tableRow = document.createElement("div");
            tableRow.textContent = input.value + " x " + i + " = " + (input.value * i);
            tablediv.appendChild(tableRow);

        }
    }
}


window.addEventListener("load", setup);