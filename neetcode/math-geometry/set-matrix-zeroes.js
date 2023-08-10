// 73 - Set Matrix Zeroes

/**
 * @param {number[][]} matrix
 * @return {void}
 */

function setZeroes(matrix) {
    const [W, H] = [matrix[0].length, matrix.length];
    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            if (matrix[i][j] !== 0) continue;
            let [row, col] = [i, j];
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
}

module.exports = setZeroes;
