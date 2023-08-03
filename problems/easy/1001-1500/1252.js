// 1252 - Cells with Odd Values in a Matrix

function oddCells(m, n, indices) {
    const matrix = [];
    const row = new Array(n).fill(false);
    for (let i = 0; i < m; i++) {
        matrix.push([...row]);
    }
    for (let i = 0; i < indices.length; i++) {
        const [row, col] = indices[i];
        for (let j = 0; j < n; j++) {
            matrix[row][j] = !matrix[row][j];
        }
        for (let j = 0; j < m; j++) {
            matrix[j][col] = !matrix[j][col];
        }
    }
    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] && count++;
        }
    }
    return count;
}
