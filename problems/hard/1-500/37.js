// 37 - Sudoku Solver

function solveSudoku(board) {
    function backtrack() {
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] !== '.') continue;
                for (let n = 1; n <= 9; n++) {
                    if (!validate(r, c, String(n))) continue;
                    board[r][c] = String(n);
                    if (backtrack()) return true;
                }
                board[r][c] = '.';
                return;
            }
        }
        return true;
    }
    function validate(r, c, n) {
        const rr = 3 * (r / 3 >> 0);
        const cc = 3 * (c / 3 >> 0);
        for (let i = 0; i < 9; i++) {
            if (board[r][i] === n) return;
            if (board[i][c] === n) return;
            const drr = i / 3 >> 0;
            const dcc = i % 3 >> 0;
            if (board[rr + drr][cc + dcc] === n) return;
        }
        return true;
    }
    backtrack();
}
