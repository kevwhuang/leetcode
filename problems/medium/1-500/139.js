// 139 - Word Break

function wordBreak(s, wordDict) {
    const dp = new Array(s.length + 1).fill(0);
    dp[s.length] = 1;
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = 0; j < wordDict.length; j++) {
            if (!s.startsWith(wordDict[j], i)) continue;
            dp[i] = dp[i + wordDict[j].length];
            if (dp[i]) break;
        }
    }
    return Boolean(dp[0]);
}
