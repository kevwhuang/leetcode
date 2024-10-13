// 2817 - Minimum Absolute Difference Between Elements With Constraint

function minAbsoluteDifference(nums, x) {
    function binarySearch(tgt) {
        let l = 0, r = arr.length;
        while (l < r) {
            const m = l + r >> 1;
            if (arr[m] < tgt) l = m + 1;
            else r = m;
        }
        return l;
    }
    let min = Infinity;
    const arr = [], bound = nums.length - x;
    for (let i = 0; i < bound; i++) {
        arr.splice(binarySearch(nums[i]), 0, nums[i]);
        const tgt = nums[i + x], idx = binarySearch(tgt);
        if (idx) min = Math.min(tgt - arr[idx - 1], min);
        if (idx < arr.length) min = Math.min(arr[idx] - tgt, min);
    }
    return min;
}
