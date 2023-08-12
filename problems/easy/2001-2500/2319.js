// 2319 - Check If Matrix Is X-Matrix

function checkXMatrix(grid) {
    const width = grid[0].length;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < width; j++) {
            const isDiag = i === j || width - 1 - i === j;
            if (isDiag && !grid[i][j]) return false;
            if (!isDiag && grid[i][j]) return false;
        }
    }
    return true;
}
