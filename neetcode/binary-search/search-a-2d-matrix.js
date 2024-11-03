// 74 - Search a 2D Matrix

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

function searchMatrix(matrix, target) {
    const n = matrix[0].length;
    let l = 0, r = matrix.length * n - 1;
    while (l <= r) {
        const m = l + r >> 1;
        const val = matrix[m / n >> 0][m % n];
        if (val < target) l = m + 1;
        else if (val > target) r = m - 1;
        else return true;
    }
    return false;
}

module.exports = searchMatrix;
