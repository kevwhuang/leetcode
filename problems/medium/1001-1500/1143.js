// 1143 - Longest Common Subsequence

function longestCommonSubsequence(text1, text2) {
    const dp = new Uint16Array(text2.length);
    for (let i = 0; i < text1.length; i++) {
        for (let prev = 0, j = 0; j < text2.length; j++) {
            const cur = dp[j];
            if (text1[i] === text2[j]) dp[j] = prev + 1;
            else if (j) dp[j] = Math.max(dp[j - 1], dp[j]);
            prev = cur;
        }
    }
    return dp[text2.length - 1];
}
