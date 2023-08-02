// 1329 - Sort the Matrix Diagonally

function diagonalSort(mat) {
    let row = mat.length - 1;
    let col = 0;
    while (col !== mat[0].length) {
        let y, x;
        if (!row) [y, x] = [0, col++];
        if (!col) [y, x] = [row--, 0];
        const coords = [[y, x]];
        while (mat[y + 1]?.[x + 1]) {
            coords.push([++y, ++x]);
        }
        const cells = [];
        for (let i = 0; i < coords.length; i++) {
            cells.push(mat[coords[i][0]][coords[i][1]]);
        }
        cells.sort((a, b) => a - b);
        for (let i = 0; i < cells.length; i++) {
            mat[coords[i][0]][coords[i][1]] = cells[i];
        }
    }
    return mat;
}
