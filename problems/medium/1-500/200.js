// 200 - Number of Islands

function numIslands(grid) {
    function dfs(r, c) {
        if (r === -1 || r === m || c === -1 || c === n) return;
        if (grid[r][c] === '0') return;
        grid[r][c] = '0';
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }
    const m = grid.length, n = grid[0].length;
    let islands = 0;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === '0') continue;
            islands++;
            dfs(r, c);
        }
    }
    return islands;
}
