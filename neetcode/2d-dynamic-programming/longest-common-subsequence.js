// 1143 - Longest Common Subsequence

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

function longestCommonSubsequence(text1, text2) {
    const m = text1.length, n = text2.length;
    const dp = Array.from({ length: m + 1 }, () => new Uint16Array(n + 1));
    for (let r = 0; r <= m; r++) {
        dp[r][n] = 0;
    }
    for (let c = 0; c <= n; c++) {
        dp[m][c] = 0;
    }
    for (let r = m - 1; r >= 0; r--) {
        for (let c = n - 1; c >= 0; c--) {
            dp[r][c] = text1[r] === text2[c]
                ? 1 + dp[r + 1][c + 1]
                : Math.max(dp[r + 1][c], dp[r][c + 1]);
        }
    }
    return dp[0][0];
}

module.exports = longestCommonSubsequence;
