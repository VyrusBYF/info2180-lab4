//Lab 4 done by 620097204
//Tic-Tac-Toe Gam

window.onload = function() {
	document.getElementsByTagName("button")[0].onclick = seeBoard;
	
	var gamestate=[1,1,1,1,1,1,1,1,1]; //Place holders for grid state
	var turncount = 0; //Keeps track of the amount of turns, cannot be greater than 9
	var state=0;
	var board = document.getElementsByTagName("div");
	var status = document.getElementById("status");

	//Applies the square class to all divs contained in the board section of the html code
	console.log(board.length);
	function seeBoard(){
		for (var i=3; i <= 11; i++) {
			board[i].setAttribute("class", "square");
			board[i].innerHTML="";
		}
	}

	function makeMove(x){
		if (board[x].className != "square X" && board[x].className != "square O"){
			gamestate[x-3]=state; // since the 1st square starts at the 3rd div 3 must be subtracted to be in the correct position
			option(x);
		}
		else{
			console.log("I didn't work");
		}
		console.log(gamestate);

	}

	function option(x){
		if (turncount<9){
			if (state == 0){
				board[x].setAttribute("class","square X");
				board[x].innerHTML="X";
				turncount++;
				state=1
			}
			else{
				board[x].setAttribute("class","square O");
				board[x].innerHTML="O";
				turncount++;
				state=0
			}
		}
	}

	// Event Handlers for Boxes
	board[3].onclick= function (){makeMove(3)};
	board[4].onclick= function (){makeMove(4)};
	board[5].onclick= function (){makeMove(5)};
	board[6].onclick= function (){makeMove(6)};
	board[7].onclick= function (){makeMove(7)};
	board[8].onclick= function (){makeMove(8)};
	board[9].onclick= function (){makeMove(9)};
	board[10].onclick= function (){makeMove(10)};
	board[11].onclick= function (){makeMove(11)};



	//board[i].onmouseover = function(){hoverON(i-3)};
			//board[i].onmouseout = function(){hoverOFF(i-3)};

	/*
	function hoverON(x){
		board[x].classList.add("hover");
	}

	function hoverOFF(x){
		board[x].classList.remove("hover");
	} */


}