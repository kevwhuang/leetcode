// 417 - Pacific Atlantic Water Flow

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */

function pacificAtlantic(heights) {
    function dfs(r, c, prev, mat) {
        if (r === -1 || r === m || c === -1 || c === n) return;
        if (heights[r][c] < prev || mat[r][c]) return;
        mat[r][c] = true;
        dfs(r - 1, c, heights[r][c], mat);
        dfs(r + 1, c, heights[r][c], mat);
        dfs(r, c - 1, heights[r][c], mat);
        dfs(r, c + 1, heights[r][c], mat);
    }
    const m = heights.length, n = heights[0].length;
    const atlantic = [], pacific = [];
    for (let r = 0; r < m; r++) {
        atlantic.push(new Array(n).fill(false));
        pacific.push(new Array(n).fill(false));
    }
    for (let r = 0; r < m; r++) {
        dfs(r, n - 1, -1, atlantic);
        dfs(r, 0, -1, pacific);
    }
    for (let c = 0; c < n; c++) {
        dfs(m - 1, c, -1, atlantic);
        dfs(0, c, -1, pacific);
    }
    const coords = [];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (atlantic[r][c] && pacific[r][c]) coords.push([r, c]);
        }
    }
    return coords;
}

module.exports = pacificAtlantic;
