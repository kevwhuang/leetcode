// 892 - Surface Area of 3D Shapes

function surfaceArea(grid) {
    const n = grid.length;
    let surface = 0;
    let cur;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            cur = grid[i][j];
            if (i === 0) surface += cur;
            if (j === 0) surface += cur;
            if (cur) surface += 2;
            surface += Math.abs(cur - (grid[i + 1]?.[j] || 0));
            surface += Math.abs(cur - (grid[i]?.[j + 1] || 0));
        }
    }
    return surface;
}
