// 1800 - Maximum Ascending Subarray Sum

function maxAscendingSum(nums) {
    let local = nums[0], max = nums[0];
    for (let i = 1; i <= nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            local += nums[i];
        } else {
            max = Math.max(local, max);
            local = nums[i];
        }
    }
    return max;
}
