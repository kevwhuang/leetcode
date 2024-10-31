// 70 - Climbing Stairs

/**
 * @param {number} n
 * @return {number}
 */

function climbStairs(n) {
    const sqrt = Math.sqrt(5);
    const term1 = ((1 + sqrt) / 2) ** (n + 1);
    const term2 = ((1 - sqrt) / 2) ** (n + 1);
    return Math.round((term1 - term2) / sqrt);
}

module.exports = climbStairs;
