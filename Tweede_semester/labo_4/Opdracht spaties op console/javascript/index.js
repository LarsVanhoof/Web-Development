const setup = () => {
    let Button = document.getElementById("submit");
    Button.addEventListener("click", printZin);
}
const printZin = () => {
    let tekst = document.getElementById("tekst").value;
    console.log(maakMetSpaties(tekst));
}
const maakMetSpaties = (inputText) => {
    InputText = inputText.replaceAll(" ", "");
    var output = "";
    for(let i = 0; i < inputText.length; i++){
        output += inputText.charAt(i) + " ";
    }
    return output.trim();
}
window.addEventListener("load", setup);