let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
const cells = document.querySelectorAll('.cell');
const resultDisplay = document.getElementById('result');
            function checkWinner() {
    for (let i = 0; i < winPatterns.length; i++) {
        const [a, b, c] = winPatterns[i];
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameActive = false;
            return gameBoard[a];
        }
    }
    if (!gameBoard.includes('')) {
        gameActive = false;
        return 'Draw';
    }
    return null;
}
function handleResult(result) {
    if (result === 'Draw') {
        resultDisplay.textContent = "It's a Draw!";
    } else {
        resultDisplay.textContent = `Player ${result} Won`;
    }
}
function makeMove(cell) {
    const index = Array.from(cells).indexOf(cell);
    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        const winner = checkWinner();
        if (winner) {
            handleResult(winner);
        } else {
            resultDisplay.textContent = `Player ${currentPlayer} Turn`;
        }
    }
}
function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    cells.forEach(cell => cell.textContent = '');
    resultDisplay.textContent = `Player ${currentPlayer} Turn`;
}
resetGame();

cell.forEach((cell, i) => {
    btn.addEventListener('click', () => ticTacToe(cell, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);
