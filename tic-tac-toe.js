//Lab 4 done by 623397234
//Tic-Tac-Toe Gam

window.onload = function() {
	document.getElementsByTagName("button")[0].onclick = seeBoard;
	
	var gamestate=[0,0,0,0,0,0,0,0,0]; //Place holders for grid state
	var turncount = 0; //Keeps track of the amount of turns, cannot be greater than 9
	var state=1;
	var board = document.getElementsByTagName("div");
	var status = document.getElementById("status");
	var gameover = false;
	


	//Applies the square class to all divs contained in the board section of the html code
	console.log(board.length);
	function seeBoard(){
		for (var i=3; i <= 11; i++) {
			board[i].setAttribute("class", "square");
			board[i].innerHTML="";
			status.innerHTML="Move your mouse over a square and click to play an X or an O.";
			status.setAttribute("class","");
		}
		//Resets the values for a new game
		state=1
		gamestate=[0,0,0,0,0,0,0,0,0]
		turncount = 1;
		gameover=false;
	}

	function makeMove(x){
		if (board[x].className != "square X" && board[x].className != "square O" && gamestate[x-3]==0 && gameover==false ){
			gamestate[x-3]=state; // since the 1st square starts at the 3rd <div>, 3 must be subtracted to be in the correct position
			option(x);
		}
		else{
			console.log("I didn't work");
			status.innerHTML="Try Again";
		}
		console.log(gamestate);

	}

	function option(x){
		if (turncount<9){
			if (state == 1){
				board[x].setAttribute("class","square X");
				board[x].innerHTML="X";
				if (turncount>=5){
					console.log("Test")
					winner(x);
				}	
				state=-1
				turncount++;
				
				
				
			}
			else{
				board[x].setAttribute("class","square O");
				board[x].innerHTML="O";
				if (turncount>=5){
					console.log("Test")
					winner(x);
				}
				state=1
				turncount++;
				
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

	//Event Handlers for Cursor Presence
	board[3].onmouseover= function (){hoverON(3)};
	board[4].onmouseover= function (){hoverON(4)};
	board[5].onmouseover= function (){hoverON(5)};
	board[6].onmouseover= function (){hoverON(6)};
	board[7].onmouseover= function (){hoverON(7)};
	board[8].onmouseover= function (){hoverON(8)};
	board[9].onmouseover= function (){hoverON(9)};
	board[10].onmouseover= function (){hoverON(10)};
	board[11].onmouseover= function (){hoverON(11)};

	//Event Handlers for Cursor Absence
	board[3].onmouseout= function (){hoverOFF(3)};
	board[4].onmouseout= function (){hoverOFF(4)};
	board[5].onmouseout= function (){hoverOFF(5)};
	board[6].onmouseout= function (){hoverOFF(6)};
	board[7].onmouseout= function (){hoverOFF(7)};
	board[8].onmouseout= function (){hoverOFF(8)};
	board[9].onmouseout= function (){hoverOFF(9)};
	board[10].onmouseout= function (){hoverOFF(10)};	
	board[11].onmouseout= function (){hoverOFF(11)};



	//board[i].onmouseover = function(){hoverON(i-3)};
			//board[i].onmouseout = function(){hoverOFF(i-3)};


	function winner(x){
		//First Row
		if (gamestate[0] + gamestate[1] + gamestate[2]==3){
			status.innerHTML="Congratulations! X is the Winner!";
			status.setAttribute("class","you-won");
			turncount=9;
			gameover=true;
		} else if (gamestate[0] + gamestate[1] + gamestate[2]== -3){
			status.innerHTML="Congratulations! O is the Winner!";
			status.setAttribute("class","you-won");
			turncount=9;
			gameover=true;
		}else{
			console.log("Test Failed");
		}

		//Second Row
		if (gamestate[3] + gamestate[4] + gamestate[5]==3){
			status.innerHTML="Congratulations! X is the Winner!";
			status.setAttribute("class","you-won");
			turncount=9;
			gameover=true;
		} else if (gamestate[3] + gamestate[4] + gamestate[5]== -3){
			status.innerHTML="Congratulations! O is the Winner!";
			status.setAttribute("class","you-won");
			turncount=9;
			gameover=true;
		}else{
			console.log("Test Failed");
		}

		//Third Row
		if (gamestate[6] + gamestate[7] + gamestate[8]==3){
			status.innerHTML="Congratulations! X is the Winner!";
			status.setAttribute("class","you-won");
			turncount=9;
			gameover=true;
		} else if (gamestate[6] + gamestate[7] + gamestate[8]== -3){
			status.innerHTML="Congratulations! O is the Winner!";
			status.setAttribute("class","you-won");
			turncount=9;
			gameover=true;
		}else{
			console.log("Test Failed");
		}


		//First Column
		if (gamestate[0] + gamestate[3] + gamestate[6]==3){
			status.innerHTML="Congratulations! X is the Winner!";
			status.setAttribute("class","you-won");
			turncount=9;
			gameover=true;
		} else if (gamestate[0] + gamestate[3] + gamestate[6]== -3){
			status.innerHTML="Congratulations! O is the Winner!";
			status.setAttribute("class","you-won");
			turncount=9;
			gameover=true;
		}else{
			console.log("Test Failed");
		}

		//Second Column
		if (gamestate[1] + gamestate[4] + gamestate[7]==3){
			status.innerHTML="Congratulations! X is the Winner!";
			status.setAttribute("class","you-won");
			turncount=9;
			gameover=true;
		} else if (gamestate[1] + gamestate[4] + gamestate[7]== -3){
			status.innerHTML="Congratulations! O is the Winner!";
			status.setAttribute("class","you-won");
			turncount=9;
			gameover=true;
		}else{
			console.log("Test Failed");
		}

		//Third Column
		if (gamestate[2] + gamestate[5] + gamestate[8]==3){
			status.innerHTML="Congratulations! X is the Winner!";
			status.setAttribute("class","you-won");
			turncount=9;
			gameover=true;
		} else if (gamestate[2] + gamestate[5] + gamestate[8]== -3){
			status.innerHTML="Congratulations! O is the Winner!";
			status.setAttribute("class","you-won");
			turncount=9;
			gameover=true;
		}else{
			console.log("Test Failed");
		}

		//Left Diagonal
		if (gamestate[0] + gamestate[4] + gamestate[8]==3){
			status.innerHTML="Congratulations! X is the Winner!";
			status.setAttribute("class","you-won");
			turncount=9;
			gameover=true;
		} else if (gamestate[0] + gamestate[4] + gamestate[8]== -3){
			status.innerHTML="Congratulations! O is the Winner!";
			status.setAttribute("class","you-won");
			turncount=9;
			gameover=true;
		}else{
			console.log("Test Failed");
		}

		//Right Diagonal
		if (gamestate[2] + gamestate[4] + gamestate[6]==3){
			status.innerHTML="Congratulations! X is the Winner!";
			status.setAttribute("class","you-won");
			turncount=9;
			gameover=true;

		} else if (gamestate[2] + gamestate[4] + gamestate[6]== -3){
			status.innerHTML="Congratulations! O is the Winner!";
			status.setAttribute("class","you-won");
			turncount=9;
			gameover=true;
		}else{
			console.log("Test Failed");
		}

		
	}
	function hoverON(x){
		board[x].classList.add("hover");
	}

	function hoverOFF(x){
		board[x].classList.remove("hover");
	}


}