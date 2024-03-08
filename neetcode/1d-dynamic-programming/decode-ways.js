// 91 - Decode Ways

/**
 * @param {string} s
 * @return {number}
 */

function numDecodings(s) {
    if (s[0] === '0') return 0;
    const dp = new Array(s.length + 1).fill(0);
    dp[s.length] = 1;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '0') continue;
        dp[i] += dp[i + 1] + (s[i] + s[i + 1] <= 26 && dp[i + 2]);
    }
    return dp[0];
}

module.exports = numDecodings;
