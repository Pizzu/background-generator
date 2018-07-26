let h3 = document.querySelector("h3");
let color1 = document.querySelector("#firstColor");
let color2 = document.querySelector("#secondColor");
let body = document.querySelector("#gradient");

color1.addEventListener("input", () => {
	addGradient();
});

color2.addEventListener("input", () => {
	addGradient();
});

function addGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	h3.textContent = body.style.background + ";";
}