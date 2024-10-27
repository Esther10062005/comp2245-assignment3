document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");

    let isXTurn = true; // Initialize to X's turn

    let gameState = Array(9).fill(null); // Initialize game state

    // Set up each square
    squares.forEach((square, index) => {
        square.classList.add("square");

        // Add click event to each square
        square.addEventListener("click", function () {
            if (square.textContent === "") { // Only allow move if square is empty

                const playerSymbol = isXTurn ? "X" : "O"; 
                square.textContent = playerSymbol; 
                square.classList.add(playerSymbol); // Add the appropriate class for styling
                gameState[index] = playerSymbol; 
                isXTurn = !isXTurn; 
            }
        });

        // Add mouseenter event to change style on hover

        square.addEventListener("mouseenter", function () {
            if (square.textContent === "") { 
                square.classList.add("hover");  // puts the hover code
            }
        });

        // Add mouseleave event to revert style when mouse leaves
        square.addEventListener("mouseleave", function () {
            square.classList.remove("hover"); 
        });
    });
});