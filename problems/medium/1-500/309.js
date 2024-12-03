// 309 - Best Time to Buy and Sell Stock With Cooldown

function maxProfit(prices) {
    let a = 0, b = 0, c = -Infinity;
    for (let i = 0; i < prices.length; i++) {
        const cur = a;
        a = c + prices[i];
        c = Math.max(b - prices[i], c);
        b = Math.max(cur, b);
    }
    return Math.max(a, b);
}
