// 1572 - Matrix Diagonal Sum

function diagonalSum(mat) {
    const len = mat.length,
        mid = Math.floor(len / 2);
    let sum = len % 2 ? -mat[mid][mid] : 0,
        i = 0,
        j = len - 1;
    while (mat[i]) {
        sum += mat[i][i];
        sum += mat[j--][i++];
    }
    return sum;
}
