// 2373 - Largest Local Values in a Matrix

function largestLocal(grid) {
    const m = grid.length - 1, n = grid[0].length - 1;
    const matrix = new Array(m - 1);
    for (let r = 1; r < m; r++) {
        const row = new Array(n - 1);
        matrix[r - 1] = row;
        for (let c = 1; c < n; c++) {
            row[c - 1] = Math.max(
                grid[r - 1][c - 1], grid[r - 1][c], grid[r - 1][c + 1],
                grid[r][c - 1], grid[r][c], grid[r][c + 1],
                grid[r + 1][c - 1], grid[r + 1][c], grid[r + 1][c + 1],
            );
        }
    }
    return matrix;
}
