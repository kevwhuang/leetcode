// 79 - Word Search

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

function exist(board, word) {
    function dfs(r, c, i) {
        if (i === len) return true;
        if (r === -1 || r === m || c === -1 || c === n) return;
        if (board[r][c] !== word[i]) return;
        if (seen[r][c]) return;
        seen[r][c] = true;
        const up = dfs(r - 1, c, i + 1);
        const down = dfs(r + 1, c, i + 1);
        const left = dfs(r, c - 1, i + 1);
        const right = dfs(r, c + 1, i + 1);
        seen[r][c] = false;
        return left || right || up || down;
    }
    const obj = {}, m = board.length, n = board[0].length;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            obj[board[r][c]] = (obj[board[r][c]] ?? 0) + 1;
        }
    }
    const len = word.length;
    for (let i = 0; i < len; i++) {
        if (!obj[word[i]]--) return false;
    }
    const seen = Array.from({ length: m }, () => new Array(n));
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (dfs(r, c, 0)) return true;
        }
    }
    return false;
}

module.exports = exist;
