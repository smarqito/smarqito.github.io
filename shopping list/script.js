var button = document.getElementsByTagName('button')[0];

button.addEventListener("mouseenter", function() {
	console.log("CLICK!!!!!");
})

function checkConnection() {
	if(navigator.online === true) console.log("Welcome, you're connected"); console.log("You're offline, sorry!");
}

checkConnection();