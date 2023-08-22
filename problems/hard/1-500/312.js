// 312 - Burst Balloons

function maxCoins(nums) {
    const mapper = () => new Array(nums.length).fill(0);
    nums = [1, ...nums, 1];
    const dp = Array.from({ length: nums.length }, mapper);
    const n = nums.length - 2;
    for (let j = 1; j <= n; j++) {
        for (let i = Math.min(j, n); i; i--) {
            let max = 0;
            for (let k = i; k <= j; k++) {
                let coins = dp[i][k - 1] + dp[k + 1][j];
                coins += nums[i - 1] * nums[k] * nums[j + 1];
                if (coins > max) max = coins;
            }
            dp[i][j] = max;
        }
    }
    return dp[1][n];
}
