// 518 - Coin Change II

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */

function change(amount, coins) {
    const dp = new Uint32Array(amount + 1);
    dp[0] = 1;
    for (let i = 0; i < coins.length; i++) {
        const cur = coins[i];
        for (let j = cur; j <= amount; j++) {
            dp[j] += dp[j - cur];
        }
    }
    return dp[amount];
}

module.exports = change;
