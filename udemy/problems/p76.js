// 76 - Dynamic Programming - Coin Change

function coinChange(denominations, value) {
    const dp = new Array(value + 1).fill(0);
    dp[0] = 1;
    for (let i = 0; i < denominations.length; i++) {
        const coin = denominations[i];
        for (let j = coin; j <= value; j++) {
            dp[j] += dp[j - coin];
        }
    }
    return dp[value];
}
