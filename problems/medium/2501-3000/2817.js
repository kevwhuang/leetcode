// 2817 - Minimum Absolute Difference Between Elements With Constraint

function minAbsoluteDifference(nums, x) {
    function binarySearch(target) {
        let l = 0, r = arr.length;
        while (l < r) {
            const m = l + r >> 1;
            if (arr[m] < target) l = m + 1;
            else r = m;
        }
        return l;
    }
    let min = Infinity;
    const arr = [], bound = nums.length - x;
    for (let i = 0; i < bound; i++) {
        arr.splice(binarySearch(nums[i]), 0, nums[i]);
        const target = nums[i + x], index = binarySearch(target);
        if (index) min = Math.min(target - arr[index - 1], min);
        if (index < arr.length) min = Math.min(arr[index] - target, min);
    }
    return min;
}
