// 980 - Unique Paths III

function uniquePathsIII(grid) {
    function dfs(r, c, cells) {
        if (r === -1 || r === m || c === -1 || c === n) return;
        if (grid[r][c] === -1) return;
        if (grid[r][c] === 2 && cells === 0) return walks++;
        const orig = grid[r][c];
        grid[r][c] = -1;
        dfs(r - 1, c, cells - 1);
        dfs(r + 1, c, cells - 1);
        dfs(r, c - 1, cells - 1);
        dfs(r, c + 1, cells - 1);
        grid[r][c] = orig;
    }
    const m = grid.length, n = grid[0].length;
    let start, cells = 1;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 0) cells++;
            else if (grid[r][c] === 1) start = [r, c];
        }
    }
    let walks = 0;
    dfs(start[0], start[1], cells);
    return walks;
}
