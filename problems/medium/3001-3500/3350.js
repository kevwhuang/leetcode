// 3350 - Adjacent Increasing Subarrays Detection II

function maxIncreasingSubarrays(nums) {
    let max = 1, win = 1, prev = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) win++;
        else prev = win, win = 1;
        max = Math.max(Math.min(win, prev), win >> 1, max);
    }
    return max;
}
