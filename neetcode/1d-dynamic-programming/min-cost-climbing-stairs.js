// 746 - Min Cost Climbing Stairs

/**
 * @param {number[]} cost
 * @return {number}
 */

function minCostClimbingStairs(cost) {
    for (let i = 2; i < cost.length; i++) {
        cost[i] += Math.min(cost[i - 2], cost[i - 1]);
    }
    return Math.min(cost.at(-2), cost.at(-1));
}

module.exports = minCostClimbingStairs;
