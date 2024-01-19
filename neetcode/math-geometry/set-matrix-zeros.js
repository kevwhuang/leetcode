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
            let row = r, col = c;
            while (row > 0) matrix[--row][col] && (matrix[row][col] = null);
            row = r;
            while (row < m - 1) matrix[++row][col] && (matrix[row][col] = null);
            row = r;
            while (col > 0) matrix[row][--col] && (matrix[row][col] = null);
            col = c;
            while (col < n - 1) matrix[row][++col] && (matrix[row][col] = null);
        }
    }
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            matrix[r][c] === null && (matrix[r][c] = 0);
        }
    }
    return matrix;
}

module.exports = setZeroes;
