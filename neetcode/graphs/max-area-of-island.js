// 695 - Max Area of Island

/**
 * @param {number[][]} grid
 * @return {number}
 */

function maxAreaOfIsland(grid) {
    function dfs(r, c) {
        if (r === -1 || r === m || c === -1 || c === n) return;
        if (grid[r][c] === 0) return;
        area++;
        grid[r][c] = 0;
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }
    const m = grid.length, n = grid[0].length;
    let area, max = 0;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 0) continue;
            area = 0;
            dfs(r, c);
            max = Math.max(area, max);
        }
    }
    return max;
}

module.exports = maxAreaOfIsland;
