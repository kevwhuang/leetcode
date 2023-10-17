// 518 - Coin Change II

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */

function change(amount, coins) {
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for (let i = 0; i < coins.length; i++) {
        const coin = coins[i];
        for (let j = coin; j <= amount; j++) {
            dp[j] += dp[j - coin];
        }
    }
    return dp[amount];
}

module.exports = change;
