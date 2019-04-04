var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var colorReset = document.querySelector(".colorReset");
var randomButton = document.querySelector(".randomButton");


function setGradient() {
	body.style.background =
		"linear-gradient(to right, "
		+ color1.value
		+ ","
		+ color2.value
		+ ")";

		css.textContent = body.style.background + ";";
}

function resetGradient() {
	body.style.background = "linear-gradient(to right, red, #FFE900)";
	color1.value = "#ff0000";
	color2.value = "#FFE900";
}

function getRandomColor() { 
  var letters = '0123456789ABCDEF';
  var colorRandom1 = '#';
  var colorRandom2 = '#';
  for (var i = 0; i < 6; i++) {
    colorRandom1 += letters[Math.floor(Math.random() * 16)];
    colorRandom2 += letters[Math.floor(Math.random() * 16)];
  }
  color1.value = colorRandom1;
  color2.value = colorRandom2;
  body.style.background = "linear-gradient(to right, " + colorRandom1 +", " + colorRandom2 + ")";
  css.textContent = body.style.background +";";
}

window.onload = setGradient();

color1.addEventListener("input", setGradient);
	
color2.addEventListener("input", setGradient);

colorReset.addEventListener("click", resetGradient);

randomButton.addEventListener("click", getRandomColor);