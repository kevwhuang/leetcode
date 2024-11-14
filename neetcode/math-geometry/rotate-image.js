// 48 - Rotate Image

/**
 * @param {number[][]} matrix
 * @return {void}
 */

function rotate(matrix) {
    const M = matrix, n = M.length;
    for (let r = 0; r < n; r++) {
        for (let swap, c = r + 1; c < n; c++) {
            swap = M[r][c], M[r][c] = M[c][r], M[c][r] = swap;
        }
    }
    M.forEach(e => e.reverse());
}

module.exports = rotate;
