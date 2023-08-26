// 1886 - Determine Whether Matrix Can Be Obtained by Rotation

function findRotation(mat, target) {
    const m = mat.length, n = mat[0].length;
    let rot0 = true, rot90 = true, rot180 = true, rot270 = true;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (rot0 && mat[i][j] !== target[i][j]) rot0 = false;
            if (rot90 && mat[i][j] !== target[j][m - i - 1]) rot90 = false;
            if (rot180 && mat[i][j] !== target[m - i - 1][n - j - 1]) rot180 = false;
            if (rot270 && mat[i][j] !== target[n - j - 1][i]) rot270 = false;
        }
    }
    return rot0 || rot90 || rot180 || rot270;
}
