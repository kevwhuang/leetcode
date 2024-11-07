// 121 - Best Time to Buy and Sell Stock

function maxProfit(prices) {
    let max = 0, min = Infinity;
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(prices[i], min);
        max = Math.max(prices[i] - min, max);
    }
    return max;
}
