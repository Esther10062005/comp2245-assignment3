document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");
    const statusDiv = document.getElementById("status");
    const newGameButton = document.getElementById("new-game");
    let isXTurn = true; 
    let gameState = Array(9).fill(null); //keeps track of the state of the game

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    function checkWinner() {
        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                statusDiv.textContent = 'Congratulations! ${gameState[a]} is the Winner!';
                statusDiv.classList.add("you-won");
                return true;
            }
        }
        return false;
    }

    function checkDraw() {
        return gameState.every(cell => cell !== null);
    }

    function resetGame() {
        gameState.fill(null);
        squares.forEach(square => {
            square.textContent = "";
            square.classList.remove("X", "O");
        });
        statusDiv.textContent = "Move your mouse over a square and click to play an X or an O.";
        statusDiv.classList.remove("you-won");
        isXTurn = true;
    }

    // Initialize the game
    squares.forEach((square, index) => {
        square.classList.add("square");

        // Add click event to add X or O to square
        square.addEventListener("click", function () {
            if (square.textContent === "" && !checkWinner()) { // Only allow move if square is empty and game is not over
                const playerSymbol = isXTurn ? "X" : "O"; // Determine player symbol
                square.textContent = playerSymbol; // Add the symbol to the square
                square.classList.add(playerSymbol); 
                gameState[index] = playerSymbol; 
                if (!checkWinner()) {
                    if (checkDraw()) {
                        statusDiv.textContent = "It's a Draw!";
                    } else {
                        isXTurn = !isXTurn; // 
                    }
                }
            }
        });

       
        square.addEventListener("mouseenter", function () {
            if (square.textContent === "") { 
                square.classList.add("hover"); // Add hover class
            }
        });

        
        square.addEventListener("mouseleave", function () {
            square.classList.remove("hover"); // Remove hover class
        });
    });

    newGameButton.addEventListener("click", resetGame);
});














// online resources such as geeks for geeks, chat gpt,  were used to assist me with this code
