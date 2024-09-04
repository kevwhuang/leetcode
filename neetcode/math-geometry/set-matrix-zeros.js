// 73 - Set Matrix Zeros

/**
 * @param {number[][]} matrix
 * @return {void}
 */

function setZeroes(matrix) {
    const m = matrix.length, n = matrix[0].length;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (matrix[r][c] !== 0) continue;
            let rr = r, cc = c;
            while (rr > 0) matrix[--rr][cc] && (matrix[rr][cc] = null);
            rr = r;
            while (rr < m - 1) matrix[++rr][cc] && (matrix[rr][cc] = null);
            rr = r;
            while (cc > 0) matrix[rr][--cc] && (matrix[rr][cc] = null);
            cc = c;
            while (cc < n - 1) matrix[rr][++cc] && (matrix[rr][cc] = null);
        }
    }
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            matrix[r][c] ??= 0;
        }
    }
    return matrix;
}

module.exports = setZeroes;
