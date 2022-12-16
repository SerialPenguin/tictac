/* Vinna med en rad, vinna med kolumn, vinna med diagonal */

function checkCondition(condition, startIndex, dim, board) {
  let index = 0;
  let symbol = board[startIndex];
  while (condition(symbol, index) && index < dim) {
    index++;
  }
  return index == dim ? symbol : " ";
}

function checkForWinner(board) {
  let dim = Math.sqrt(board.length) //varje plan är n * n lång
  let winSymbol = " ";
  let index = 0;

  while (winSymbol === " " && index < dim) {
    if (winSymbol == " ") {
      const rowCondition = (symbol, col) => symbol == board[col + (index * dim)]
      winSymbol = checkCondition(rowCondition, index * dim, dim, board);
    }

    if (winSymbol == " ") {
      const colCondition = (symbol, row) => symbol == board[index + (row * dim)]
      winSymbol = checkCondition(colCondition, index, dim, board);
    }

    index++;
  }

  if (winSymbol == " ") {
    const leftDiagonalCondition = (symbol, row) => symbol == board[row * (dim + 1)];
    winSymbol = checkCondition(leftDiagonalCondition, 0, dim, board);
  }

  if (winSymbol == " ") {
    const rightDiagonalCondition = (symbol, row) => symbol == board[(row + 1) * (dim - 1)];
    winSymbol = checkCondition(rightDiagonalCondition, dim - 1, dim, board);
  }

  if (!board.includes(" ")) {
    winSymbol = "draw";
  }

  return winSymbol == " " ? false : winSymbol;
}