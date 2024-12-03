// 70 - Climbing Stairs

/**
 * @param {number} n
 * @return {number}
 */

function climbStairs(n) {
    const sqrt = 5 ** .5;
    const a = ((1 + sqrt) / 2) ** (n + 1);
    const b = ((1 - sqrt) / 2) ** (n + 1);
    return (a - b) / sqrt >> 0;
}

module.exports = climbStairs;
