// 2501 - Longest Square Streak in an Array

function longestSquareStreak(nums) {
    nums = new Uint32Array(nums).sort();
    let max = -1;
    const dp = new Uint32Array(nums.at(-1) + 1);
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (nums[i - 1] === num) continue;
        dp[num] = 1;
        const sqrt = num ** .5;
        if (sqrt === sqrt >> 0) dp[num] = dp[sqrt] + 1;
        if (dp[num] >= 2) max = Math.max(dp[num], max);
    }
    return max;
}
