// 417 - Pacific Atlantic Water Flow

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */

function pacificAtlantic(heights) {
    function dfs(r, c, prev, mat) {
        if (r < 0 || r === height || c < 0 || c === width) return;
        if (heights[r][c] < prev || mat[r][c]) return;
        mat[r][c] = true;
        dfs(r - 1, c, heights[r][c], mat);
        dfs(r + 1, c, heights[r][c], mat);
        dfs(r, c - 1, heights[r][c], mat);
        dfs(r, c + 1, heights[r][c], mat);
    }
    const height = heights.length, width = heights[0].length;
    const atlantic = [], pacific = [];
    for (let r = 0; r < height; r++) {
        atlantic.push(new Array(width).fill(false));
        pacific.push(new Array(width).fill(false));
    }
    for (let r = 0; r < height; r++) {
        dfs(r, 0, -1, pacific);
        dfs(r, width - 1, -1, atlantic);
    }
    for (let c = 0; c < width; c++) {
        dfs(0, c, -1, pacific);
        dfs(height - 1, c, -1, atlantic);
    }
    const coords = [];
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            atlantic[r][c] && pacific[r][c] && coords.push([r, c]);
        }
    }
    return coords;
}

module.exports = pacificAtlantic;
