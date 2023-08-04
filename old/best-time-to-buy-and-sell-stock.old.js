/**
 * @param {number[]} prices
 * @return {number}
 */

module.exports = function maxProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i];
        const currentProfit = currentPrice - minPrice;
        if (currentPrice < minPrice) minPrice = currentPrice;
        if (currentProfit > maxProfit) maxProfit = currentProfit;
    }
    return maxProfit;
};
