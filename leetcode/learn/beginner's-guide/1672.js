// 1672 - Richest Customer Wealth

function maximumWealth(accounts) {
    let max = 0;
    for (const customer of accounts) {
        max = Math.max(customer.reduce((s, i) => s + i, 0), max);
    }
    return max;
}
