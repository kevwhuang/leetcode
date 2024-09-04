// 121 - Best Time to Buy and Sell Stock

/**
 * @param {number[]} prices
 * @return {number}
 */

function maxProfit(prices) {
    let max = 0, buy = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < buy) buy = prices[i];
        max = Math.max(prices[i] - buy, max);
    }
    return max;
}

module.exports = maxProfit;
