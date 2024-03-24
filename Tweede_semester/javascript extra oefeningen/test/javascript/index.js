const setup = () => {
    let button = document.getElementById("button");

    button.addEventListener("click", doeLi)
}

const doeLi = () => {
    let inputs = document.getElementsByName("foto");
    let checkedRadio = null;
    for (let i = 0; i < inputs.length; i++){
        if (inputs[i].checked){
            checkedRadio = inputs[i];
        }
    }


}

window.addEventListener("load", setup);