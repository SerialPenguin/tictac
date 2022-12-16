function getEmptyBoard() {
  return [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "];
}

const TEST_SYMBOL = "O";

describe("Victory with row", function () {
  it("First row", function () {
    let board = getEmptyBoard();
    board[0] = TEST_SYMBOL;
    board[1] = TEST_SYMBOL;
    board[2] = TEST_SYMBOL;
    board[3] = TEST_SYMBOL;

    expect(checkForWinner(board)).toBe(TEST_SYMBOL);
  });

  it("Second row", function () {
    let board = getEmptyBoard();
    board[4] = TEST_SYMBOL;
    board[5] = TEST_SYMBOL;
    board[6] = TEST_SYMBOL;
    board[7] = TEST_SYMBOL;

    expect(checkForWinner(board)).toBe(TEST_SYMBOL);
  });

  it("Third row", function () {
    let board = getEmptyBoard();
    board[8] = TEST_SYMBOL;
    board[9] = TEST_SYMBOL;
    board[10] = TEST_SYMBOL;
    board[11] = TEST_SYMBOL;

    expect(checkForWinner(board)).toBe(TEST_SYMBOL);
  });
});

describe("Victory with column", function () {
  it("First col", function () {
    let board = getEmptyBoard();
    board[0] = TEST_SYMBOL;
    board[4] = TEST_SYMBOL;
    board[8] = TEST_SYMBOL;
    board[12] = TEST_SYMBOL;

    expect(checkForWinner(board)).toBe(TEST_SYMBOL);
  });

  it("Second col", function () {
    let board = getEmptyBoard();
    board[1] = TEST_SYMBOL;
    board[5] = TEST_SYMBOL;
    board[9] = TEST_SYMBOL;
    board[13] = TEST_SYMBOL;

    expect(checkForWinner(board)).toBe(TEST_SYMBOL);
  });

  it("Third col", function () {
    let board = getEmptyBoard();
    board[2] = TEST_SYMBOL;
    board[6] = TEST_SYMBOL;
    board[10] = TEST_SYMBOL;
    board[14] = TEST_SYMBOL;

    expect(checkForWinner(board)).toBe(TEST_SYMBOL);
  });
});

describe("Victory with diagonal", function () {
  it("Right diagonal", function () {
    let board = getEmptyBoard();
    board[3] = TEST_SYMBOL;
    board[6] = TEST_SYMBOL;
    board[9] = TEST_SYMBOL;
    board[12] = TEST_SYMBOL;

    expect(checkForWinner(board)).toBe(TEST_SYMBOL);
  });

  it("Left diagonal", function () {
    let board = getEmptyBoard();
    board[0] = TEST_SYMBOL;
    board[5] = TEST_SYMBOL;
    board[10] = TEST_SYMBOL;
    board[15] = TEST_SYMBOL;

    expect(checkForWinner(board)).toBe(TEST_SYMBOL);
  });

});

describe("No winner", function () {

  it("Test game draw", function () {
    let board = [
      "X", "X", "O",
      "O", "X", "X",
      "X", "O", "O"
    ];

    expect(checkForWinner(board)).toBe("draw");
  });

  it("Test no winner yet", function () {
    let board = getEmptyBoard();
    expect(checkForWinner(board)).toBe(false);
  });
});