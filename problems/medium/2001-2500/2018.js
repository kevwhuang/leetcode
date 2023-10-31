// 2018 - Check If Word Can Be Placed in Crossword

function placeWordInCrossword(board, word) {
    function dfs(r, c, dr, dc, i) {
        if (i === word.length) return validate(r, c);
        if (validate(r, c)) return false;
        if (board[r][c] !== ' ' && board[r][c] !== word[i]) return false;
        return dfs(r + dr, c + dc, dr, dc, i + 1);
    }
    const validate = (r, c) =>
        r === -1 || r === m || c === -1 || c === n || board[r][c] === '#';
    const m = board.length, n = board[0].length;
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (board[r][c] === '#') continue;
            if (board[r][c] !== ' ' && board[r][c] !== word[0]) continue;
            for (const [dr, dc] of dirs) {
                if (!validate(r - dr, c - dc)) continue;
                if (dfs(r, c, dr, dc, 0)) return true;
            }
        }
    }
    return false;
}
