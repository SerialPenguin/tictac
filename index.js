/* Listeners and setting player names */
let symbols = ['X', 'O'];
let playerTurn = 0;
let turns = 0;
let playerOne = document.querySelector('.player-one');
let playerTwo = document.querySelector('.player-two'); //.value för att få värdet sen
// let startButton = document.querySelector('.start-btn');
// startButton.addEventListener('click', () => {
//   console.log(
//     `Player one: ${playerOne.value}, Player two: ${playerTwo.value}`
//   );
// });

let gameBoard = document.querySelector('.gameboard');

gameBoard.addEventListener('click', (event) => {
  if (event.target.classList != 'gameboard') {
    event.target.innerText = symbols[playerTurn];
    playerTurn = (playerTurn + 1) % 2;
    turns++;
  }
  if (turns == 9) {
    setTimeout(() => {
      alert('Game Over!');
    }, 300);
  }
});