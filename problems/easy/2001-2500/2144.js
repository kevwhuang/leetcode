// 2144 - Minimum Cost of Buying Candies With Discount

function minimumCost(cost) {
    cost.sort((a, b) => b - a);
    let paid = 0;
    for (let i = 0; i < cost.length; i += 3) {
        paid += cost[i] + (cost[i + 1] || 0);
    }
    return paid;
}
