// 312 - Burst Balloons

/**
 * @param {number[]} nums
 * @return {number}
 */

function maxCoins(nums) {
    const n = nums.length;
    const dp = Array.from({ length: n + 2 }, () => new Array(n + 2).fill(0));
    for (let j = 1; j <= n; j++) {
        for (let i = j; i; i--) {
            let max = 0;
            for (let k = i; k <= j; k++) {
                const a = i ? nums[i - 1] : 1;
                const b = k < n ? nums[k] : 1;
                const c = j + 1 < n ? nums[j + 1] : 1;
                max = Math.max(a * b * c + dp[i][k - 1] + dp[k + 1][j], max);
            }
            dp[i][j] = max;
        }
    }
    return dp[1][n];
}

module.exports = maxCoins;
