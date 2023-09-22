// 7 - Sliding Window

function maxSubarraySum(nums, length) {
    if (nums.length < length) return null;
    let window = 0;
    for (let i = 0; i < length; i++) {
        window += nums[i];
    }
    let max = window;
    for (let i = length; i < nums.length; i++) {
        window += nums[i] - nums[i - length];
        max = Math.max(window, max);
    }
    return max;
}
