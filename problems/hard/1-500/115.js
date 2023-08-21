// 115 - Distinct Subsequences

function numDistinct(s, t) {
    const dp = new Uint32Array(t.length);
    for (let i = s.length - 1; ~i; i--) {
        let prev = 1;
        for (let j = t.length - 1; ~j; j--) {
            const cur = dp[j];
            if (s[i] === t[j]) dp[j] += prev;
            prev = cur;
        }
    }
    return dp[0];
}
