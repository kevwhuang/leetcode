// 3105 - Longest Strictly Increasing or Strictly Decreasing Subarray

function longestMonotonicSubarray(nums) {
    let max = 1, inc = 1, dec = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            max = Math.max(++inc, max);
            dec = 1;
        } else if (nums[i - 1] > nums[i]) {
            max = Math.max(++dec, max);
            inc = 1;
        } else {
            inc = dec = 1;
        }
    }
    return max;
}
