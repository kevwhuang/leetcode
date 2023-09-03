// 73 - Set Matrix Zeroes

/**
 * @param {number[][]} matrix
 * @return {void}
 */

function setZeroes(matrix) {
    const H = matrix.length, W = matrix[0].length;
    let row, col;
    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            if (matrix[i][j] !== 0) continue;
            row = i;
            col = j;
            while (row > 0) matrix[--row][col] && (matrix[row][col] = null);
            row = i;
            while (row < H - 1) matrix[++row][col] && (matrix[row][col] = null);
            row = i;
            while (col > 0) matrix[row][--col] && (matrix[row][col] = null);
            col = j;
            while (col < W - 1) matrix[row][++col] && (matrix[row][col] = null);
        }
    }
    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            matrix[i][j] === null && (matrix[i][j] = 0);
        }
    }
    return matrix;
}

module.exports = setZeroes;
