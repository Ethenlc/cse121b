let board = [];

async function loadBoard() {
    try {
        const response = await fetch('https://sudoku-api.vercel.app/api/dosuku?query=%7Bnewboard(limit%3A1)%7Bgrids%7Bvalue%7D%7D%7D');
        if (!response.ok) {
            throw new Error('Failed to load Sudoku board.');
        }
        const data = await response.json();
        if (!data.newboard || !data.newboard.grids || !Array.isArray(data.newboard.grids) || data.newboard.grids.length === 0) {
            throw new Error('Invalid response format.');
        }
        board = data.newboard.grids[0].value.reduce((acc, row) => acc.concat(row), []); // Flatten the 2D array to a 1D array
        displayBoard();
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

function displayBoard() {
    const table = document.getElementById("sudoku-board");
    table.innerHTML = "";
    for (let i = 0; i < 9; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement("td");
            cell.textContent = `${board[i * 9 + j] === 0 ? "" : board[i * 9 + j]}`;
            if (board[i * 9 + j] !== 0) {
                cell.setAttribute("contenteditable", false);
                cell.classList.add("initial-cell"); // Optionally add a class for styling
            } else {
                cell.setAttribute("contenteditable", true);
                cell.addEventListener("input", function() {
                    const value = parseInt(this.textContent) || 0;
                    board[i * 9 + j] = value;
                });
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

function saveBoard() {
//I'll fill this in later
}

function validateBoard() {
//I'll fill this in later
}

loadBoard();
