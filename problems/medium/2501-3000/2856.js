// 2856 - Minimum Array Length After Pair Removals

function minLengthAfterRemovals(nums) {
    const len = nums.length, half = len / 2 >> 0;
    let l = 0, r = half;
    while (l < half && r < len) {
        if (nums[l] < nums[r++]) l++;
    }
    return nums.length - l - l;
}
