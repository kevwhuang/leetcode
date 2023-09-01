// 463 - Island Perimeter

function islandPerimeter(grid) {
    let perimeter = 0;
    const m = grid.length, n = grid[0].length;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (!grid[r][c]) continue;
            if (!r || !grid[r - 1][c]) perimeter++;
            if (r + 1 === m || !grid[r + 1][c]) perimeter++;
            if (!c || !grid[r][c - 1]) perimeter++;
            if (c + 1 === n || !grid[r][c + 1]) perimeter++;
        }
    }
    return perimeter;
}
