// 883 - Projection Area of 3D Shapes

function projectionArea(grid) {
    let x = 0;
    for (let i = 0; i < grid.length; i++) {
        x += Math.max.apply(null, grid[i]);
    }
    let y = 0;
    let z = 0;
    for (let j = 0; j < grid[0].length; j++) {
        let max = 0;
        for (let i = 0; i < grid.length; i++) {
            const cell = grid[i][j];
            max = Math.max(cell, max);
            cell && z++;
        }
        y += max;
    }
    return x + y + z;
}
