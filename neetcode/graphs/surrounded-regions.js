// 130 - Surrounded Regions

/**
 * @param {character[][]} board
 * @return {void}
 */

function solve(board) {
    function dfs(r, c) {
        if (r < 0 || r === height || c < 0 || c === width) return;
        if (board[r][c] === 'X' || board[r][c] === null) return;
        board[r][c] = null;
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }
    const height = board.length, width = board[0].length;
    for (let r = 0; r < height; r++) {
        dfs(r, 0);
        dfs(r, width - 1);
    }
    for (let c = 0; c < width; c++) {
        dfs(0, c);
        dfs(height - 1, c);
    }
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            if (board[r][c] === 'O') board[r][c] = 'X';
            else if (board[r][c] === null) board[r][c] = 'O';
        }
    }
    return board;
}

module.exports = solve;
