// 51 - N-Queens

/**
 * @param {number} n
 * @return {string[][]}
 */

function solveNQueens(n) {
    function backtrack(r) {
        if (r === n) return res.push(M.map(e => e.join('')));
        for (let c = 0; c < n; c++) {
            let rr = r - 1, cc;
            while (~rr && M[rr][c] !== 'Q') rr--;
            if (~rr) continue;
            rr = r - 1, cc = c - 1;
            while (~rr && ~cc && M[rr][cc] !== 'Q') rr--, cc--;
            if (~rr && ~cc) continue;
            rr = r - 1, cc = c + 1;
            while (~rr && ~cc && M[rr][cc] !== 'Q') rr--, cc++;
            if (~rr && cc < n) continue;
            M[r][c] = 'Q';
            backtrack(r + 1);
            M[r][c] = '.';
        }
    }
    const res = [];
    const M = Array.from({ length: n }, () => new Array(n).fill('.'));
    backtrack(0);
    return res;
}

module.exports = solveNQueens;
