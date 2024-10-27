document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");
    let isXTurn = true; // Keeps track of whose turn it is (X or O)
    let gameState = Array(9).fill(null); // Initialize array with 9 null values

    // Add class to each square
    squares.forEach((square, index) => {
        square.classList.add("square");

        // Add hover effect
        square.addEventListener("click", function () {
            if (square.textContent === "") { // Only add X or O if square is empty
                const playerSymbol = isXTurn ? "X" : "O"; // Determine which player's turn it is
                square.textContent = playerSymbol; // Add X or O to square
                square.classList.add(playerSymbol); // Add class to change color of X or O
                gameState[index] = playerSymbol; // Update the game state
                isXTurn = !isXTurn; // changes turns
            }
        });
    });
});