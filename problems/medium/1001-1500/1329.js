// 1329 - Sort the Matrix Diagonally

function diagonalSort(mat) {
    const height = mat.length;
    for (let j = - height + 2; j < mat[0].length - 1; j++) {
        const diag = [];
        for (let i = 0; i < height; i++) {
            mat[i][i + j] && diag.push(mat[i][i + j]);
        }
        diag.sort((a, b) => a - b);
        let index = 0;
        for (let i = 0; i < height; i++) {
            mat[i][i + j] && (mat[i][i + j] = diag[index++]);
        }
    }
    return mat;
}
