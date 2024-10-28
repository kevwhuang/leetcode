// 121 - Best Time to Buy and Sell Stock

/**
 * @param {number[]} prices
 * @return {number}
 */

function maxProfit(prices) {
    let max = 0, buy = Infinity;
    for (let i = 0; i < prices.length; i++) {
        buy = Math.min(prices[i], buy);
        max = Math.max(prices[i] - buy, max);
    }
    return max;
}

module.exports = maxProfit;
