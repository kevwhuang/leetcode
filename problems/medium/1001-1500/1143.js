// 1143 - Longest Common Subsequence

function longestCommonSubsequence(text1, text2) {
    const m = text1.length, n = text2.length;
    const dp = new Uint16Array(n);
    for (let i = 0; i < m; i++) {
        for (let prev = 0, j = 0; j < n; j++) {
            const cur = dp[j];
            if (text1[i] === text2[j]) dp[j] = prev + 1;
            else if (j) dp[j] = Math.max(dp[j - 1], dp[j]);
            prev = cur;
        }
    }
    return dp[n - 1];
}
