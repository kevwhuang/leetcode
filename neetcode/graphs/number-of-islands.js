// 200 - Number of Islands

/**
 * @param {character[][]} grid
 * @return {number}
 */

function numIslands(grid) {
    function dfs(r, c) {
        if (r < 0 || r === height || c < 0 || c === width) return;
        if (grid[r][c] == 0) return;
        grid[r][c] = 0;
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }
    const height = grid.length, width = grid[0].length;
    let islands = 0;
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            if (grid[r][c] === '1') {
                islands++;
                dfs(r, c);
            }
        }
    }
    return islands;
}

module.exports = numIslands;
