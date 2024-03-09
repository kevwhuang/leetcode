// 97 - Interleaving String

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */

function isInterleave(s1, s2, s3) {
    const len1 = s1.length, len2 = s2.length;
    if (len1 + len2 !== s3.length) return false;
    const dp = new Array(len2 + 1);
    dp[len2] = true;
    for (let j = len2 - 1; j >= 0; j--) {
        dp[j] = dp[j + 1] && s2[j] === s3[len1 + j];
    }
    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2; j >= 0; j--) {
            dp[j] = dp[j] && s1[i] === s3[i + j];
            if (dp[j] || j === len2) continue;
            dp[j] = dp[j + 1] && s2[j] === s3[i + j];
        }
    }
    return dp[0];
}

module.exports = isInterleave;
