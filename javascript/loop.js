var todos = [
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

var todosImportant = [
	"clean room!",
	"brush teeth!",
	"exercise!",
	"study javascript!",
	"eat healthy!"
];
/*var todosLength = todos.length;
for (var i = 0; i < todosLength; i++) {
	console.log(i);
}
*/
function logTodos(todo,i) {
	console.log(todo,i);
}

todos.forEach(logTodos);

todosImportant.forEach(logTodos);

//while loop verifica primeiro a condição e depois executa
var counterOne = 10;
while (counterOne > 10) {
	console.log(counterOne);
	counterOne--;
}

//do loop executa primeiro o loop e depois verifica se a condição mantém
/*var counterTwo = 10;
do {
	console.log("do While: " + counterTwo);
	counterTwo--;
} while (counterTwo > 10);
*/