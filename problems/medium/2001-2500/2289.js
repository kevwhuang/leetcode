// 2289 - Steps to Make Array Non-Decreasing

function totalSteps(nums) {
    let steps = 0;
    const dp = new Uint32Array(nums.length);
    const stack = [];
    for (let i = nums.length - 1; ~i; i--) {
        while (stack.length && nums[i] > nums[stack.at(-1)]) {
            dp[i] = Math.max(dp[stack.pop()], dp[i] + 1);
            if (dp[i] > steps) steps = dp[i];
        }
        stack.push(i);
    }
    return steps;
}
