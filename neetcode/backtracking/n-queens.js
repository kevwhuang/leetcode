// 51 - N-Queens

/**
 * @param {number} n
 * @return {string[][]}
 */

function solveNQueens(n) {
    function backtrack(r) {
        if (r === n) return res.push(board.map(row => row.join('')));
        for (let c = 0; c < n; c++) {
            if (invalidCol(0, c)) continue;
            if (invalidDiag(r, c, -1)) continue;
            if (invalidDiag(r, c, 1)) continue;
            board[r][c] = 'Q';
            backtrack(r + 1);
            board[r][c] = '.';
        }
    }
    function invalidCol(r, c) {
        while (r < n) if (board[r++][c] === 'Q') return true;
    }
    function invalidDiag(r, c, d) {
        while (~--r && ~c) if (board[r][c += d] === 'Q') return true;
    }
    if (n === 1) return [['Q']];
    if (n === 2 || n === 3) return [];
    const res = [];
    const board = Array.from({ length: n }, () => new Array(n).fill('.'));
    backtrack(0);
    return res;
}

module.exports = solveNQueens;
