// 2128 - Remove All Ones With Row and Column Flips

function removeOnes(grid) {
    const height = grid.length, width = grid[0].length;
    for (let c = 0; c < width; c++) {
        if (grid[0][c]) {
            for (let r = 0; r < height; r++) {
                grid[r][c] = grid[r][c] ? 0 : 1;
            }
        }
    }
    for (let r = 1; r < height; r++) {
        for (let c = 1; c < width; c++) {
            if (grid[r][c - 1] !== grid[r][c]) return false;
        }
    }
    return true;
}
