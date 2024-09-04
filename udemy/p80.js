// 80 - Frequency Counter / Multiple Pointer - findPair

function findPair(nums, diff) {
    const set = new Set();
    for (let i = 0, cur; i < nums.length; i++) {
        cur = nums[i];
        if (set.has(cur - diff) || set.has(cur + diff)) return true;
        set.add(cur);
    }
    return false;
}
