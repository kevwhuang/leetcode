// 1143 - Longest Common Subsequence

function longestCommonSubsequence(text1, text2) {
    const m = text1.length, n = text2.length;
    const dp = Array.from({ length: m + 1 }, () => new Uint16Array(n + 1));
    for (let r = m - 1; ~r; r--) {
        for (let c = n - 1; ~c; c--) {
            if (text1[r] === text2[c]) dp[r][c] = dp[r + 1][c + 1] + 1;
            else dp[r][c] = Math.max(dp[r][c + 1], dp[r + 1][c]);
        }
    }
    return dp[0][0];
}
