function setPlayerName(idOfDiv, playerNameDiv) {
  playerName = document.getElementById(idOfDiv).value;
  document.getElementById(playerNameDiv).innerHTML = playerName 
}

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
      document.getElementById(index).innerHTML = "<img id='pikachu' src='pikachumove.gif'>"
      player = 'O';
      cells[index] = 'X';
      checkWinner();
    } else {
      document.getElementById(index).innerHTML = "<img id='charmander' src='charmander.gif'>"
      player = 'X';
      cells[index] = 'O'
      checkWinner();
    }
}

function checkWinner() { 
  if(cells[0] === "X" && cells[1] === "X" && cells[2] === "X"){
        alert("Pikachu Wins!");
     }else if(cells[3] === "X" && cells[4] === "X" && cells[5] === "X"){
        alert("Pikachu Wins!");
     }else if(cells[6] === "X" && cells[7] === "X" && cells[8] === "X"){
        alert("Pikachu Wins!"); 
     }else if(cells[0] === "X" && cells[3] === "X" && cells[6] === "X"){
        alert("Pikachu Wins!");
     }else if(cells[1] === "X" && cells[4] === "X" && cells[7] === "X"){
        alert("Pikachu Wins!"); 
     }else if(cells[2] === "X" && cells[5] === "X" && cells[8] === "X"){
        alert("Pikachu Wins!");
     }else if(cells[0] === "X" && cells[4] === "X" && cells[8] === "X"){
        alert("Pikachu Wins!");
     }else if(cells[2] === "X" && cells[4] === "X" && cells[6] === "X"){
        alert("Pikachu Wins!");
     }else if(cells[0] === "O" && cells[1] === "O" && cells[2] === "O"){
        alert("Charmander Wins!");
     }else if(cells[3] === "O" && cells[4] === "O" && cells[5] === "O"){
        alert("Charmander Wins!");
     }else if(cells[6] === "O" && cells[7] === "O" && cells[8] === "O"){
        alert("Charmander Wins!");
     }else if(cells[0] === "O" && cells[3] === "O" && cells[6] === "O"){
        alert("Charmander Wins!");
     }else if(cells[1] === "O" && cells[4] === "O" && cells[7] === "O"){
        alert("Charmander Wins!"); 
     }else if(cells[2] === "O" && cells[5] === "O" && cells[8] === "O"){ 
        alert("Charmander Wins!");
     }else if(cells[0] === "O" && cells[4] === "O" && cells[8] === "O"){
        alert("Charmander Wins!"); 
     }else if(cells[2] === "O" && cells[4] === "O" && cells[6] === "O"){
        alert("Charmander Wins!");
   }
 };

//had to make this a function that is called in the HTML
//in order for the JS to find #resetButton
function onLoad(){
  document.getElementById("resetButton").addEventListener("click", function(){
    for(var i= 0; i < cells.length; i++){
      cells[i] = "";
      document.getElementById(i).innerHTML = "<img style='width: 150px; height: 150px;' src='ash.jpeg'>";
    }
  });
}

