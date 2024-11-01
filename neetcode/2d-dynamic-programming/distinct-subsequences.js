// 115 - Distinct Subsequences

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

function numDistinct(s, t) {
    const dp = new Uint32Array(t.length);
    for (let i = s.length - 1; ~i; i--) {
        for (let prev = 1, j = t.length - 1; ~j; j--) {
            const cur = dp[j];
            if (s[i] === t[j]) dp[j] += prev;
            prev = cur;
        }
    }
    return dp[0];
}

module.exports = numDistinct;
