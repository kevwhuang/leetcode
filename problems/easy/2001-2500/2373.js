// 2373 - Largest Local Values in a Matrix

function largestLocal(grid) {
    const matrix = [];
    for (let i = 1; i < grid.length - 1; i++) {
        const row = [];
        for (let j = 1; j < grid[0].length - 1; j++) {
            const max = Math.max(
                grid[i - 1][j - 1],
                grid[i - 1][j],
                grid[i - 1][j + 1],
                grid[i][j - 1],
                grid[i][j],
                grid[i][j + 1],
                grid[i + 1][j - 1],
                grid[i + 1][j],
                grid[i + 1][j + 1],
            );
            row.push(max);
        }
        matrix.push(row);
    }
    return matrix;
}
