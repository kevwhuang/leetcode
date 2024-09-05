// 2921 - Maximum Profitable Triplets With Increasing Prices II

function maxProfit(prices, profits) {
    let maxPrice = 0;
    const n = prices.length;
    for (let i = 0; i < n; i++) {
        maxPrice = Math.max(prices[i], maxPrice);
    }
    const treeLeft = new Uint32Array(maxPrice + 1);
    const maxLeft = new Uint32Array(n);
    for (let i = 0; i < n; i++) {
        for (let j = prices[i]; j <= maxPrice; j += j & -j) {
            treeLeft[j] = Math.max(profits[i], treeLeft[j]);
        }
        let max = 0;
        for (let j = prices[i] - 1; j; j -= j & -j) {
            max = Math.max(treeLeft[j], max);
        }
        maxLeft[i] = max;
    }
    let maxProfit = -1;
    const treeRight = new Uint32Array(maxPrice + 1);
    for (let i = n - 1; ~i; i--) {
        do {
            if (maxLeft[i] === 0) break;
            let maxRight = 0;
            for (let j = maxPrice - prices[i]; j; j -= j & -j) {
                maxRight = Math.max(treeRight[j], maxRight);
            }
            if (maxRight === 0) break;
            const profit = maxLeft[i] + profits[i] + maxRight;
            maxProfit = Math.max(profit, maxProfit);
        } while (false);
        for (let j = maxPrice - prices[i] + 1; j <= maxPrice; j += j & -j) {
            treeRight[j] = Math.max(profits[i], treeRight[j]);
        }
    }
    return maxProfit;
}
