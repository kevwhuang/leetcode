// 2852 - Sum of Remoteness of All Cells

function sumRemoteness(grid) {
    function dfs(r, c) {
        if (r < 0 || r === height || c < 0 || c === width) return;
        if (grid[r][c] === -1) return;
        localSum += grid[r][c];
        localArea++;
        grid[r][c] = -1;
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }
    const height = grid.length, width = grid[0].length;
    let area = 0;
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            grid[r][c] !== -1 && area++;
        }
    }
    let sum = 0, localSum, localArea;
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            if (grid[r][c] === -1) continue;
            localSum = localArea = 0;
            dfs(r, c);
            sum += localSum * (area - localArea);
        }
    }
    return sum;
}
