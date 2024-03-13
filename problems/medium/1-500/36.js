// 36 - Valid Sudoku

function isValidSudoku(board) {
    for (let r = 0; r < 9; r++) {
        const row = new Set(), col = new Set();
        for (let c = 0; c < 9; c++) {
            const rowCell = board[r][c];
            if (rowCell !== '.') {
                if (row.has(rowCell)) return false;
                row.add(rowCell);
            }
            const colCell = board[c][r];
            if (colCell !== '.') {
                if (col.has(colCell)) return false;
                col.add(colCell);
            }
            if (!(r % 3) && !(c % 3)) {
                const box = new Set();
                for (let d1 = 0; d1 < 3; d1++) {
                    for (let d2 = 0; d2 < 3; d2++) {
                        const boxCell = board[r + d1][c + d2];
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
