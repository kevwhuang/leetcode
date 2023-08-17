// 463 - Island Perimeter

function islandPerimeter(grid) {
    let perimeter = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j]) {
                !grid[i + 1]?.[j] && perimeter++;
                !grid[i - 1]?.[j] && perimeter++;
                !grid[i]?.[j + 1] && perimeter++;
                !grid[i]?.[j - 1] && perimeter++;
            }
        }
    }
    return perimeter;
}
