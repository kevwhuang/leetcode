// 1351 - Count Negative Numbers in a Sorted Matrix

function countNegatives(grid) {
    let row = grid.length - 1,
        col = 0,
        count = 0;
    while (row >= 0 && col < grid[0].length) {
        if (grid[row][col] >= 0) col++;
        else {
            count += grid[0].length - col;
            row--;
        }
    }
    return count;
}
