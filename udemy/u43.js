// 43 - Divide and Conquer - sortedFrequency

function sortedFrequency(nums, target) {
    let l = 0, r = nums.length - 1;
    while (l < r) {
        const m = ~~((l + r) / 2);
        if (nums[m] < target) l = m + 1;
        else if (nums[m] > target) r = m - 1;
        else r = m;
    }
    if (nums[r] !== target) return -1;
    const r0 = r;
    l = r0, r = nums.length - 1;
    while (l < r) {
        const m = Math.ceil((l + r) / 2);
        if (nums[m] < target) l = m + 1;
        else if (nums[m] > target) r = m - 1;
        else l = m;
    }
    return r - r0 + 1;
}
