// 1708 - Largest Subarray Length K

function largestSubarray(nums, k) {
    let pos, largest = -Infinity;
    for (let i = 0; i <= nums.length - k; i++) {
        if (nums[i] > largest) {
            largest = nums[i];
            pos = i;
        }
    }
    return nums.slice(pos, pos + k);
}
