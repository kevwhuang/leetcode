// 2639 - Find the Width of Columns of a Grid

function findColumnWidth(grid) {
    const widths = [];
    for (let j = 0; j < grid[0].length; j++) {
        let width = 1;
        for (let i = 0; i < grid.length; i++) {
            const length = String(grid[i][j]).length;
            if (length > width) width = length;
        }
        widths.push(width);
    }
    return widths;
}
