// 121 - Best Time to Buy and Sell Stock

function maxProfit(prices) {
    let res = 0, min = Infinity;
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(prices[i], min);
        res = Math.max(prices[i] - min, res);
    }
    return res;
}
