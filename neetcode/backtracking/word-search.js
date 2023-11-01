// 79 - Word Search

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

function exist(board, word) {
    function dfs(r, c, i) {
        if (i === len) return exists = true;
        if (board[r][c] !== word[i]) return;
        board[r][c] = null;
        if (r >= 1) dfs(r - 1, c, i + 1);
        if (r < m - 1) dfs(r + 1, c, i + 1);
        if (c >= 1) dfs(r, c - 1, i + 1);
        if (c < n - 1) dfs(r, c + 1, i + 1);
        board[r][c] = word[i];
    }
    const m = board.length, n = board[0].length, len = word.length;
    if (m === 1 && n === 1 && len === 1 && board[0][0] === word[0]) return true;
    let exists = false;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (board[r][c] !== word[0]) continue;
            dfs(r, c, 0);
            if (exists) return true;
        }
    }
    return false;
}

module.exports = exist;
