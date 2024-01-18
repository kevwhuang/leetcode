// 122 - Best Time to Buy and Sell Stock II

function maxProfit(prices) {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i - 1] >= prices[i]) continue;
        profit += prices[i] - prices[i - 1];
    }
    return profit;
}
