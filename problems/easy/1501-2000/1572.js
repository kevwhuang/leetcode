// 1572 - Matrix Diagonal Sum

function diagonalSum(mat) {
    const mid = ~~(mat.length / 2);
    let sum = mat.length % 2 ? -mat[mid][mid] : 0;
    let i = 0, j = mat.length - 1;
    while (mat[i]) sum += mat[i][i] + mat[j--][i++];
    return sum;
}
