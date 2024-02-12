// 3033 - Modify the Matrix

function modifiedMatrix(matrix) {
    const m = matrix.length, n = matrix[0].length;
    for (let c = 0; c < n; c++) {
        const rows = [];
        let max = 0;
        for (let r = 0; r < m; r++) {
            if (matrix[r][c] === -1) rows.push(r);
            else max = Math.max(matrix[r][c], max);
        }
        for (let i = 0; i < rows.length; i++) {
            matrix[rows[i]][c] = max;
        }
    }
    return matrix;
}
