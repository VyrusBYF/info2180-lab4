//Lab 4 done by 620097204
//Tic-Tac-Toe Gam

window.onload = function() {
	document.getElementsByTagName("button")[0].onclick = seeBoard;
	
	var gamestate=[0,0,0,0,0,0,0,0,0]; //Place holders for grid state
	var turncount = 0; //Keeps track of the amount of turns, cannot be greater than 9
	var state=0;
	var board = document.getElementsByTagName("div");
	var status = document.getElementById("status");

	//Applies the square class to all divs contained in the board section of the html code
	function seeBoard(){
		for (var i=3; i < board.length - 1; i++) {
			board[i].setAttribute("class", "square");
			board[i].innerHTML="";
			board[i].setAttribute("onclick","makeMove("+i+")");
		}
	}

	function makeMove(x){
		if (board[x].className != "square X" && board[x].className != "square O"){
			gamestate[x]=state;
			option(x);
		}


	}

	function option (){
		if (turncount<9){
			if (board[x].classList.contains("hover")){
				
			}
		}
	}


}