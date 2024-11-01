// 91 - Decode Ways

function numDecodings(s) {
    if (s[0] === '0') return 0;
    const dp = new Uint32Array(s.length + 1);
    dp[s.length] = 1;
    for (let i = s.length - 1; ~i; i--) {
        if (s[i] === '0') continue;
        dp[i] = dp[i + 1];
        if (i + 2 === dp.length) continue;
        if (s[i] > '2' || s[i] === '2' && s[i + 1] > '6') continue;
        dp[i] += dp[i + 2];
    }
    return dp[0];
}
