/*eslint-env browser*/
var row1,row2,row3 = 0;
var col1,col2,col3 = 0;
var turnsTaken = 0;
var diag1,diag2 = 0;
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var turn = true; // when true it's player one's turn
var grid = 
[[0,0,0],
 [0,0,0],
 [0,0,0]];
var squareNames = 
[['tl', 'tc', 'tr'],
 ['ml', 'mc', 'mr'],
 ['bl', 'bc', 'br']];
    
p1.style.color = "white";

var clicked = function(x, y) {
  
  if(grid[y][x] === 0){
    if(turn){
      p2.style.color = 'white';
      p1.style.color = 'gray';
      document.getElementById(squareNames[y][x]).firstChild.innerHTML = "X";
      grid[y][x] = 1;
    } else {
      p1.style.color = "white";
      p2.style.color = 'gray';
      document.getElementById(squareNames[y][x]).firstChild.innerHTML = "O"; 
      grid[y][x] = -1;
    }
    turn = !turn;
    turnsTaken++;
 }
 row1 = grid[0][0] + grid[0][1] + grid[0][2];
 row2 = grid[1][0] + grid[1][1] + grid[1][2];
 row3 = grid[2][0] + grid[2][1] + grid[2][2];
 col1 = grid[0][0] + grid[1][0] + grid[2][0];
 col2 = grid[0][1] + grid[1][1] + grid[2][1];
 col3 = grid[0][2] + grid[1][2] + grid[2][2];
 diag1 = grid[0][0] + grid[1][1] + grid[2][2];
 diag2 = grid[0][2] + grid[1][1] + grid[2][0];
if(row1 == 3 || row2 == 3 || row3 == 3 || col1 == 3 
|| col2 == 3 || col3 == 3 || diag1 == 3 || diag2 == 3) {
     gameOver("Player One Wins!");
 } else if(row1 == -3 || row2 == -3 || row3 == -3 || col1 == -3 
|| col2 == -3 || col3 == -3 || diag1 == -3 || diag2 == -3) {
     gameOver("Player Two Wins!");
 } else if(turnsTaken >= 9){
     gameOver("Draw...");
}
};  
function gameOver(winner){
document.getElementById("endtext").innerHTML = winner;
document.getElementById("gameover").style.visibility = "visible";
}
function playAgain(){
 grid = 
[[0,0,0],
 [0,0,0],
 [0,0,0]]; 
 turn = true;
 document.getElementById("gameover").style.visibility = "hidden";
 for(var i = 0; i < squareNames.length; i++) {
   var names = squareNames[i];
     for(var j = 0; j < names.length; j++){
      document.getElementById(names[j]).firstChild.innerHTML = " ";
     }
 }
 turnsTaken = 0;
 row1,row2,row3,col1,col2,col3,diag1,diag2 = 0;
}

