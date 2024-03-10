const tekstElement = document.getElementById("Zin").textContent;
let count = 0;
let index = tekstElement.toLowerCase().indexOf("an");

while (index !== -1) {
    count++;
    index = tekstElement.toLowerCase().indexOf("an", index + 1);
}

document.getElementById("aantalAn's").textContent = `An komt ${count} keer voor.`;
