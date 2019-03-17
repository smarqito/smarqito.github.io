var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var buttonDelete = document.getElementsByName("liDelete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	var liNewButton = document.createElement("button");
	liNewButton.setAttribute("name", "liDelete");
	liNewButton.setAttribute("class", "deleteButton");
	liNewButton.appendChild(document.createTextNode("Delete"));
	li.appendChild(liNewButton);
	checkClick()
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function liClick() {
	this.classList.toggle("done");
}

function _eventListener(place, listener, _function) {
	place.addEventListener(listener, _function);
}

_eventListener(button, "click", addListAfterClick);

_eventListener(input, "keypress", addListAfterKeypress);

// button.addEventListener("click", addListAfterClick);

// input.addEventListener("keypress", addListAfterKeypress);

function checkClick() {
	for (var d = 0; d < buttonDelete.length; d++) {
	buttonDelete[d].addEventListener("click", liDelete);
	}
	for (var i = 0; i < li.length ; i++) {
	li[i].addEventListener("click",	liClick);
	}
}

window.onload = function() {
	checkClick();
}
function liDelete() {
	console.log(this.parentElement.parentElement.removeChild(this.parentElement));
}