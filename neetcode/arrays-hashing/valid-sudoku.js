// 36 - Valid Sudoku

/**
 * @param {array[][]} board
 * @return {boolean}
 */

function isValidSudoku(board) {
    for (let i = 0; i < 9; i++) {
        const row = new Set();
        const col = new Set();
        for (let j = 0; j < 9; j++) {
            const rowCell = board[i][j];
            if (rowCell !== '.') {
                if (row.has(rowCell)) return false;
                row.add(rowCell);
            }
            const colCell = board[j][i];
            if (colCell !== '.') {
                if (col.has(colCell)) return false;
                col.add(colCell);
            }
            if (!(i % 3) && !(j % 3)) {
                const box = new Set();
                for (let m = 0; m < 3; m++) {
                    for (let n = 0; n < 3; n++) {
                        const boxCell = board[i + m][j + n];
                        if (boxCell !== '.') {
                            if (box.has(boxCell)) return false;
                            box.add(boxCell);
                        }
                    }
                }
            }
        }
    }
    return true;
}

module.exports = isValidSudoku;
