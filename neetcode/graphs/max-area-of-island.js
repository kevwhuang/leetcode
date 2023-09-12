// 695 - Max Area of Island

/**
 * @param {number[][]} grid
 * @return {number}
 */

function maxAreaOfIsland(grid) {
    function dfs(r, c) {
        if (r < 0 || r === height || c < 0 || c === width) return;
        if (grid[r][c] === 0) return;
        area++;
        grid[r][c] = 0;
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }
    const height = grid.length, width = grid[0].length;
    let area, max = 0;
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            if (grid[r][c] === 0) continue;
            area = 0;
            dfs(r, c);
            max = Math.max(area, max);
        }
    }
    return max;
}

module.exports = maxAreaOfIsland;
