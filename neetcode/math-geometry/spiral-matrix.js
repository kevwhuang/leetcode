// 54 - Spiral Matrix

/**
 * @param {number[]} matrix
 * @return {number[]}
 */

function spiralOrder(matrix) {
    const validate = (r, c) => r >= 0 && r < m && c >= 0 && c < n;
    const M = matrix, m = M.length, n = M[0].length;
    const res = new Int8Array(m * n);
    let r = 0, c = 0, dr = 0, dc = 1;
    for (let i = 0; i < res.length; i++) {
        res[i] = M[r][c];
        M[r][c] = null;
        if (!validate(r + dr, c + dc) || M[r + dr][c + dc] === null) {
            if (dr === 0 && dc === 1) dr = 1, dc = 0;
            else if (dr === 1 && dc === 0) dr = 0, dc = -1;
            else if (dr === 0 && dc === -1) dr = -1, dc = 0;
            else dr = 0, dc = 1;
        }
        r += dr, c += dc;
    }
    return res;
}

module.exports = spiralOrder;
