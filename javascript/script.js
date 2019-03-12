var database = [
	{
		username: "andrei",
		password: "password"
	},
	{
		username: "marco",
		password: "password"
	},
	{
		username: "sousa",
		password: "password"
	},
	{
		username: "branca",
		password: "password"
	},
	{
		username: "malheiro",
		password: "password"
	}
];

var newsFeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is so cooooool!"
	}
];


function isUserValid(username, password) {
	for(var i = 0; i < database.length; i++) {
		if(database[i].username === username &&
			database[i].password === password) {
				return true;
		} 
	}
	return false;
}

function signIn(username, password) {
	
	if (isUserValid(username,password)) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and/or password!");
	}
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);