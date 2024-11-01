// 312 - Burst Balloons

/**
 * @param {number[]} nums
 * @return {number}
 */

function maxCoins(nums) {
    nums = [1, ...nums, 1];
    const n = nums.length - 2;
    const dp = Array.from({ length: n + 2 }, () => new Uint32Array(n + 2));
    for (let r = n; r; r--) {
        for (let c = r; c <= n; c++) {
            let max = 0;
            for (let i = r; i <= c; i++) {
                const prod = nums[r - 1] * nums[i] * nums[c + 1];
                max = Math.max(prod + dp[r][i - 1] + dp[i + 1][c], max);
            }
            dp[r][c] = max;
        }
    }
    return dp[1][n];
}

module.exports = maxCoins;
