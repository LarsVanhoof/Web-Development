const storeSliderValues = () => {
    const red = document.getElementById("sldRed").value;
    const green = document.getElementById("sldGreen").value;
    const blue = document.getElementById("sldBlue").value;

    localStorage.setItem("sliderRed", red);
    localStorage.setItem("sliderGreen", green);
    localStorage.setItem("sliderBlue", blue);
};

const restoreSliderValues = () => {
    const red = localStorage.getItem("sliderRed") || "128";
    const green = localStorage.getItem("sliderGreen") || "255";
    const blue = localStorage.getItem("sliderBlue") || "128";

    document.getElementById("sldRed").value = red;
    document.getElementById("sldGreen").value = green;
    document.getElementById("sldBlue").value = blue;
};

const storeSwatches = () => {
    const swatches = [];
    const swatchElements = document.querySelectorAll("#swatchComponents .swatch");

    swatchElements.forEach((swatch) => {
        const red = swatch.getAttribute("data-red");
        const green = swatch.getAttribute("data-green");
        const blue = swatch.getAttribute("data-blue");
        swatches.push({ red, green, blue });
    });

    localStorage.setItem("swatches", JSON.stringify(swatches));
};

const restoreSwatches = () => {
    const storedSwatches = JSON.parse(localStorage.getItem("swatches")) || [];

    storedSwatches.forEach((color) => {
        addSwatchComponent(color.red, color.green, color.blue);
    });
};
