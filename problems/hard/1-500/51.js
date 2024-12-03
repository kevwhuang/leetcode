// 51 - N-Queens

function solveNQueens(n) {
    function backtrack(r) {
        if (r === n) return res.push(M.map(e => e.join('')));
        for (let rr, cc, c = 0; c < n; c++) {
            rr = r - 1;
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
