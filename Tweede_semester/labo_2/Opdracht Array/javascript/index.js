const setup = () => {

}

let familie = ["Damon", "Stefan", "Lewis", "Werner", "Eric"];

console.log(familie.length);
for (let i = 0; i < familie.length; i+=2){
    console.log(familie[i]);
}

const VoegNaamToe = () => {
    let naam = prompt("Vul een naam in.", "");
    if (naam !== null){
        familie.push(naam);
    }
}

VoegNaamToe();

console.log(familie.toString());

window.addEventListener("load", setup);