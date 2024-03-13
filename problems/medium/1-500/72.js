// 72 - Edit Distance

function minDistance(word1, word2) {
    const m = word1.length, n = word2.length;
    const dp = Array.from({ length: m + 1 }, () => new Uint16Array(n + 1));
    for (let r = m; r >= 0; r--) {
        dp[r][n] = m - r;
    }
    for (let c = n; c >= 0; c--) {
        dp[m][c] = n - c;
    }
    for (let r = m - 1; r >= 0; r--) {
        for (let c = n - 1; c >= 0; c--) {
            dp[r][c] = word1[r] === word2[c]
                ? dp[r + 1][c + 1]
                : 1 + Math.min(dp[r + 1][c], dp[r + 1][c + 1], dp[r][c + 1]);
        }
    }
    return dp[0][0];
}
