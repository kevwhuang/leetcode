// 494 - Target Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function findTargetSumWays(nums, target) {
    const sum = nums.reduce((s, e) => s + e);
    if (Math.abs(target) > sum) return 0;
    const m = (sum + target) / 2;
    if (!Number.isInteger(m)) return 0;
    const dp = new Array(m + 1).fill(0);
    dp[0] = 1;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        for (let j = m; j >= num; j--) {
            dp[j] += dp[j - num];
        }
    }
    return dp[m];
}

module.exports = findTargetSumWays;
