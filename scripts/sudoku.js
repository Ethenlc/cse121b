let board = [];

// Loads the Sudoku board from a JSON file
async function loadBoard() {
    try {
        const response = await fetch('sudoku.json');
        if (!response.ok) {
            throw new Error('Failed to load Sudoku board.');
        }
        const data = await response.json();
        board = data.board;
        displayBoard();
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

// Function to display the Sudoku board
function displayBoard() {
    const table = document.getElementById("sudoku-board");
    table.innerHTML = "";
    for (let i = 0; i < 9; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement("td");
            cell.textContent = `${board[i][j] === 0 ? "" : board[i][j]}`;
            if (board[i][j] !== 0) {

                // Disable editing for cells with initial numbers
                cell.setAttribute("contenteditable", false);
                cell.classList.add("initial-cell"); // Optionally add a class for styling
            } else {
                cell.setAttribute("contenteditable", true);
                cell.addEventListener("input", function() {

                    // Update the board when user enters a number
                    const value = parseInt(this.textContent) || 0;
                    board[i][j] = value;
                });
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

loadBoard();
