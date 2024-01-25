// 790 - Domino and Tromino Tiling

function numTilings(n) {
    const dp = new Array(n + 1);
    dp[1] = 1n, dp[2] = 2n, dp[3] = 5n;
    if (n <= 3) return dp[n];
    for (let i = 4; i <= n; i++) {
        dp[i] = dp[i - 3] + 2n * dp[i - 1];
    }
    return Number(dp[n] % BigInt(1e9 + 7));
}
