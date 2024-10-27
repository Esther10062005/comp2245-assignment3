// tic-tac-toe.js

// Function to add classes to the squares
function styleGameBoard() {
    // Get all the div elements inside the game board
    const squares = document.querySelectorAll('.game-board div');

    // Loop through each square and add the 'square' class
    squares.forEach(square => {
        square.classList.add('square');
    });
}

// Add an event listener for when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', styleGameBoard);