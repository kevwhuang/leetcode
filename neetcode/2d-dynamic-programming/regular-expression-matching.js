// 10 - Regular Expression Matching

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

function isMatch(s, p) {
    const m = s.length, n = p.length;
    const dp = Array.from({ length: m + 1 }, () => new Uint8Array(n + 1));
    dp[0][0] = 1;
    for (let j = 0; j < n; j++) {
        if (p[j] === '*') dp[0][j + 1] = dp[0][j - 1];
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (p[j] === '*') {
                dp[i + 1][j + 1] = dp[i + 1][j - 1];
                if (s[i] !== p[j - 1] && p[j - 1] !== '.') continue;
                dp[i + 1][j + 1] ||= dp[i][j + 1];
            } else if (s[i] === p[j] || p[j] === '.') {
                dp[i + 1][j + 1] = dp[i][j];
            }
        }
    }
    return dp[m][n];
}

module.exports = isMatch;
