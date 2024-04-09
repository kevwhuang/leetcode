// 3105 - Longest Strictly Increasing or Strictly Decreasing Subarray

function longestMonotonicSubarray(nums) {
    let res = 1, increasing = 1, decreasing = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            res = Math.max(++increasing, res);
            decreasing = 1;
        } else if (nums[i - 1] > nums[i]) {
            res = Math.max(++decreasing, res);
            increasing = 1;
        } else {
            increasing = decreasing = 1;
        }
    }
    return res;
}
