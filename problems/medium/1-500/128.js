// 128 - Longest Consecutive Sequence

function longestConsecutive(nums) {
    if (nums.length === 0) return 0;
    nums = new Int32Array(nums).sort();
    let max = 1, win = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] === nums[i]) continue;
        win = nums[i - 1] + 1 === nums[i] ? win + 1 : 1;
        max = Math.max(win, max);
    }
    return max;
}
