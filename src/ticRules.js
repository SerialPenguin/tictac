/* Vinna med en rad, vinna med kolumn, vinna med diagonal */
function checkRows(board, index, dim) {
  let col = 1;
  let symbol = board[index * dim];
  while (symbol == board[col + (index * dim)] && col < dim) {
    col++;
  }
  return dim == col ? symbol : " ";
}

function checkCols(board, index, dim) {
  let row = 1;
  let symbol = board[index];
  while (symbol == board[index + (row * dim)] && row < dim) {
    row++;
  }
  return dim == row ? symbol : " ";
}

function checkLeftDiagonal(board, dim) {
  let row = 1;
  let symbol = board[0];
  while (symbol == board[row * (dim + 1)] && row < dim) {
    row++;
  }

  return dim == row ? symbol : " ";
}



function checkRightDiagonal(board, dim) {
  let row = 1;
  let symbol = board[dim - 1];
  while (symbol == board[row * (dim - 1)] && row < dim) {
    row++;
  }

  return dim == row ? symbol : " ";
}

function checkCondition(condition, startIndex, dim, board) {
  let index = 0;
  let symbol = board[startIndex];
  while (condition(symbol, index)) {
    index++;
  }
  return index == dim ? symbol : " ";
}

function checkForWinner(board) {
  let dim = Math.sqrt(board.length) //varje plan är n * n lång
  let winSymbol = " ";
  let index = 0;

  while (winSymbol === " " && index < dim) {
    winSymbol = checkRows(board, index, dim);

    if (winSymbol == " ") {
      winSymbol = checkCols(board, index, dim);
    }

    index++;
  }

  if (winSymbol == " ") {
    winSymbol = checkLeftDiagonal(board, dim);
  }

  if (winSymbol == " ") {
    winSymbol = checkRightDiagonal(board, dim);
  }

  if (!board.includes(" ")) {
    winSymbol = "draw";
  }

  if (winSymbol == " ") {
    return false;
  }

  return winSymbol;
}