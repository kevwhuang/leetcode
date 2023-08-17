// 566 - Reshape the Matrix

function matrixReshape(mat, r, c) {
    const height = mat.length;
    const width = mat[0].length;
    if (height * width !== r * c) return mat;
    const reshape = [];
    for (let i = 1; i <= r; i++) {
        reshape.push(new Array(c));
    }
    let [y, x] = [0, 0];
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            reshape[i][j] = mat[y][x];
            if (x + 1 < width) {
                x++;
            } else {
                x = 0;
                y++;
            }
        }
    }
    return reshape;
}
