// 62 - Unique Paths

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

function uniquePaths(m, n) {
    const dp = Array.from({ length: m }, () => new Uint32Array(n));
    dp[0].fill(1);
    for (let r = 1; r < m; r++) {
        dp[r][0] = 1;
        for (let c = 1; c < n; c++) {
            dp[r][c] = dp[r - 1][c] + dp[r][c - 1];
        }
    }
    return dp[m - 1][n - 1];
}

module.exports = uniquePaths;
