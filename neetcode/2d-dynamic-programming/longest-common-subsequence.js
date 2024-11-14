// 1143 - Longest Common Subsequence

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

function longestCommonSubsequence(text1, text2) {
    const dp = new Uint16Array(text2.length + 1);
    for (let i = text1.length - 1; ~i; i--) {
        for (let prev = 0, j = text2.length - 1; ~j; j--) {
            const cur = dp[j];
            if (text1[i] === text2[j]) dp[j] = prev + 1;
            else dp[j] = Math.max(dp[j + 1], dp[j]);
            prev = cur;
        }
    }
    return dp[0];
}

module.exports = longestCommonSubsequence;
