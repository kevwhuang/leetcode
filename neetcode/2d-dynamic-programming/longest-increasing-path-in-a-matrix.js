// 329 - Longest Increasing Path in a Matrix

/**
 * @param {number[][]} matrix
 * @return {number}
 */

function longestIncreasingPath(matrix) {
    function dfs(r, c, prev) {
        if (r === -1 || r === m || c === -1 || c === n) return 0;
        if (matrix[r][c] <= prev) return 0;
        if (memo[r][c]) return memo[r][c];
        const up = dfs(r - 1, c, matrix[r][c]);
        const down = dfs(r + 1, c, matrix[r][c]);
        const left = dfs(r, c - 1, matrix[r][c]);
        const right = dfs(r, c + 1, matrix[r][c]);
        return memo[r][c] = Math.max(up, down, left, right) + 1;
    }
    let max = 1;
    const m = matrix.length, n = matrix[0].length;
    const memo = Array.from({ length: m }, () => new Uint16Array(n));
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            max = Math.max(dfs(r, c, -1), max);
        }
    }
    return max;
}

module.exports = longestIncreasingPath;
