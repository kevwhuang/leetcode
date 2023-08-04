/**
 * @param {number[][]} matrix
 * @return {void}
 */

module.exports = function rotate(matrix) {
    let N = matrix.length;
    let x = 0;
    while (x * 2 < N) {
        const top = [];
        const right = [];
        const bottom = [];
        const left = [];
        for (let i = 0 + x; i < N - x; i++) {
            top.push(matrix[0 + x][i]);
            right.unshift(matrix[i][N - 1 - x]);
            bottom.push(matrix[N - 1 - x][i]);
            left.unshift(matrix[i][0 + x]);
        }
        for (let i = 0 + x; i < N - x; i++) {
            matrix[0 + x][i] = left[i - x];
            matrix[i][N - 1 - x] = top[i - x];
            matrix[N - 1 - x][i] = right[i - x];
            matrix[i][0 + x] = bottom[i - x];
        }
        x++;
    }
    return matrix;
};
