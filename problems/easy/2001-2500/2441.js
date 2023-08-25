// 2441 - Largest Positive Integer That Exists With Its Negative

function findMaxK(nums) {
    const set = new Set();
    let max = -1;
    for (let i = 0, cur; i < nums.length; i++) {
        cur = nums[i];
        set.add(cur);
        if (set.has(-cur)) max = Math.max(Math.abs(cur), max);
    }
    return max;
}
