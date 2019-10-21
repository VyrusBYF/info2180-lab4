//Lab 4 done by 620097204
//Tic-Tac-Toe Gam

window.onload = function() {

	var seeboard = document.querySelectorAll("div");
	//seeboard.setAttribute("class", "square");

	for (var i=3; i < seeboard.length - 1; i++) {
		seeboard[i].setAttribute("class", "square");
	}
	console.log(Object.keys(seeboard).length);

	var gamestate = [];

	//Ensures that object is an array
	//console.log(Object.prototype.toString.call(gamestate)); 

	


}