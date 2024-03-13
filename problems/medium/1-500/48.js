// 48 - Rotate Image

function rotate(matrix) {
    const M = matrix, l = M.length - 1, bound1 = Math.ceil(l / 2);
    for (let i = 0; i < bound1; i++) {
        const bound2 = l - 2 * i;
        for (let j = 0; j < bound2; j++) {
            [M[i][i + j], M[i + j][l - i], M[l - i][l - i - j], M[l - i - j][i]]
                = [M[l - i - j][i], M[i][i + j], M[i + j][l - i], M[l - i][l - i - j]];
        }
    }
    return matrix;
}
