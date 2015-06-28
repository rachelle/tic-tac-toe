var cells = ['','','','','','','','','']; 
var turn = 0; 
var gameBoard = [ [1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9],[3,5,7] ]; 

var player = 'X';

function playerMove(index) { 
  if (player === 'X') {
      document.getElementById(index).innerHTML = "X";
      player = 'O';
      //TODO:
      //write a function that checks winner
      //call it every click
    } else {
      document.getElementById(index).innerHTML = "O";
      player = 'X';
    }
}


function checkWinner() { 

	for(var i = 0; i < gameBoard.length; i++){ 
    console.log(gameBoard[i])
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



  	



