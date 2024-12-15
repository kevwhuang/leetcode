// 139 - Word Break

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

function wordBreak(s, wordDict) {
    const dp = new Uint8Array(s.length + 1);
    dp[0] = 1;
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < wordDict.length; j++) {
            if (!s.startsWith(wordDict[j], i)) continue;
            dp[i + wordDict[j].length] ||= dp[i];
            if (dp[s.length]) return true;
        }
    }
    return false;
}

module.exports = wordBreak;
