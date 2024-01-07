// 130 - Surrounded Regions

/**
 * @param {character[][]} board
 * @return {void}
 */

function solve(board) {
    function dfs(r, c) {
        if (r === -1 || r === m || c === -1 || c === n) return;
        if (board[r][c] !== 'O') return;
        board[r][c] = null;
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }
    const m = board.length, n = board[0].length;
    for (let r = 0; r < m; r++) {
        dfs(r, 0);
        dfs(r, n - 1);
    }
    for (let c = 0; c < n; c++) {
        dfs(0, c);
        dfs(m - 1, c);
    }
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (board[r][c] === 'O') board[r][c] = 'X';
            else if (board[r][c] === null) board[r][c] = 'O';
        }
    }
    return board;
}

module.exports = solve;
