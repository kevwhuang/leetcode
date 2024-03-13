// 121 - Best Time to Buy and Sell Stock

function maxProfit(prices) {
    let buyPrice = prices[0], maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        prices[i] < buyPrice && (buyPrice = prices[i]);
        prices[i] - buyPrice > maxProfit && (maxProfit = prices[i] - buyPrice);
    }
    return maxProfit;
}
