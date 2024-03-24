const initialize = () => {
	let sliders = document.getElementsByClassName("slider");
	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	update();
};

const update = () => {
	let red = document.getElementById("sldRed").value;
	let green = document.getElementById("sldGreen").value;
	let blue = document.getElementById("sldBlue").value;
	document.getElementById("lblRed").innerHTML = red;
	document.getElementById("lblGreen").innerHTML = green;
	document.getElementById("lblBlue").innerHTML = blue;
	let swatch = document.getElementById("swatch");
	swatch.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
};

const save = () => {
	let swatchColor = document.getElementById("swatch").style.backgroundColor;
	let savingDiv = document.createElement("div");
	savingDiv.classList.add("save-div");
	savingDiv.style.backgroundColor = swatchColor;
	let buttonDiv = document.createElement("div");
	let removeButton = document.createElement("button");
	removeButton.type = "button";
	removeButton.textContent = "x";
	removeButton.addEventListener("click", removeSave);
	buttonDiv.appendChild(removeButton);
	savingDiv.appendChild(buttonDiv);

	document.getElementById("swatch").appendChild(savingDiv);
};

const removeSave = (event) => {
	let savingDiv = event.target.parentElement.parentElement;
	savingDiv.remove();
};

window.addEventListener("load", initialize);

document.getElementById("save-button").addEventListener("click", save);
