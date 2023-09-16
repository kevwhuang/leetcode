// 48 - Rotate Image

/**
 * @param {number[][]} matrix
 * @return {void}
 */

function rotate(matrix) {
    const M = matrix, l = M.length - 1;
    for (let i = 0; i < Math.ceil(l / 2); i++) {
        for (let j = 0; j < l - 2 * i; j++) {
            [M[i][i + j], M[i + j][l - i], M[l - i][l - i - j], M[l - i - j][i]]
                = [M[l - i - j][i], M[i][i + j], M[i + j][l - i], M[l - i][l - i - j]];
        }
    }
    return matrix;
}

module.exports = rotate;
