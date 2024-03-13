// 309 - Best Time to Buy and Sell Stock With Cooldown

function maxProfit(prices) {
    let sold = 0, rest = 0, hold = -Infinity;
    for (let i = 0; i < prices.length; i++) {
        const prev = sold;
        sold = hold + prices[i];
        hold = Math.max(rest - prices[i], hold);
        rest = Math.max(prev, rest);
    }
    return Math.max(sold, rest);
}
