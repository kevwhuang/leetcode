// 115 - Distinct Subsequences

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

function numDistinct(s, t) {
    const dp = new Uint32Array(t.length);
    for (let i = 0; i < s.length; i++) {
        for (let prev = 1, j = 0; j < t.length; j++) {
            const cur = dp[j];
            if (s[i] === t[j]) dp[j] += prev;
            prev = cur;
        }
    }
    return dp[t.length - 1];
}

module.exports = numDistinct;
