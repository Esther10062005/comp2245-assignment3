// tic-tac-toe.js
document.addEventListener("DOMContentLoaded", function() {
    const gameBoard = document.querySelector(".game-board"); // Adjust selector if necessary

    // Check if the game board exists
    if (gameBoard) {
        // Create 9 squares and append them to the game board
        for (let i = 0; i < 9; i++) {
            const square = document.createElement("div");
            square.classList.add("square"); // Add the class 'square' to each div
            gameBoard.appendChild(square); // Append the square to the game board
        }
    }
});