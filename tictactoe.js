var cells = ['','','','','','','','',''];
var turn = 0; 
var gameBoard = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
        ];

var player = 'X';

function playerMove(index) { 
  if (player === 'X') {
      document.getElementById(index).innerHTML = "<img src='pikachumove.gif'>"
      player = 'O';
      //TODO:
      //write a function that checks winner
      //call it every click
      cells[index] = index;
      checkWinner();
    } else {
      document.getElementById(index).innerHTML = "O";
      player = 'X';
      cells[index] = index;
      checkWinner();
    }
}


function checkWinner() { 
  
	for(var i = 0; i < gameBoard.length; i++){ 
    var combo = gameBoard[i];
    console.log(combo[2])
    // if ((cells[combo[0]]==cells[combo[1]]) && (cells[combo[1]]==cells[combo[2]]) && (cells[combo[0]]!="")) {
    //   alert("you win, " + cells[combo[0]] + "!");

    // }
  }

 //  if(checkWinner === gameboard[i]){
 // 	  console.log("You have won the battle " + checkWinner + " !"); 
 // }
 //    return checkWinner();
 
 } 


 // var playerWins = 0; 
 // var computerWins = 0; 

// while(playerWins < 5 && computerWins < 5){ 

//  var playerMove = getPlayerMove(); 
//  var computerMove = getComputerMove(); 

//  var winner = checkWinner(playerMove, computerMove);

//   return winner; 

//   if(winner === )

//  function reset(){ 
//    if(checkWinner)[ 
//    	]



  	



