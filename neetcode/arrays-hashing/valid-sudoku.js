// 36 - Valid Sudoku

/**
 * @param {array[][]} board
 * @return {boolean}
 */

function isValidSudoku(board) {
    function invalid(r, c) {
        if (board[r][c] === '.') return;
        if (seen.has(board[r][c])) return true;
        seen.add(board[r][c]);
    }
    let seen, r = -1;
    while (++r < 9) {
        seen = new Set(), c = -1;
        while (++c < 9) if (invalid(r, c)) return false;
        seen = new Set(), c = -1;
        while (++c < 9) if (invalid(c, r)) return false;
        seen = new Set();
        const rr = 3 * r % 9, cc = r - rr / 3;
        for (let dr = 0; dr < 3; dr++) {
            for (let dc = 0; dc < 3; dc++) {
                if (invalid(rr + dr, cc + dc)) return false;
            }
        }
    }
    return true;
}

module.exports = isValidSudoku;
