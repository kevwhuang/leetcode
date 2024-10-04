// 322 - Coin Change

function coinChange(coins, amount) {
    const dp = new Uint16Array(amount + 1).fill(10001);
    dp[0] = 0;
    for (let i = 0; i < coins.length; i++) {
        const coin = coins[i];
        for (let j = coin; j <= amount; j++) {
            dp[j] = Math.min(dp[j - coin] + 1, dp[j]);
        }
    }
    return dp[amount] === 10001 ? -1 : dp[amount];
}
