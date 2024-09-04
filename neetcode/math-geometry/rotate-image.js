// 48 - Rotate Image

/**
 * @param {number[][]} matrix
 * @return {void}
 */

function rotate(matrix) {
    const M = matrix, m = M.length - 1, bound1 = Math.ceil(m / 2);
    for (let r = 0; r < bound1; r++) {
        const bound2 = m - 2 * r;
        for (let c = 0; c < bound2; c++) {
            const p1 = M[m - r - c][r];
            const p2 = M[r][r + c];
            const p3 = M[r + c][m - r];
            const p4 = M[m - r][m - r - c];
            M[r][r + c] = p1;
            M[r + c][m - r] = p2;
            M[m - r][m - r - c] = p3;
            M[m - r - c][r] = p4;
        }
    }
    return M;
}

module.exports = rotate;
