// 41 - Divide and Conquer - countZeroes

function countZeroes(nums) {
    if (nums[nums.length - 1]) return 0;
    let l = 0, r = nums.length - 1;
    while (l < r) {
        const m = ~~((l + r) / 2);
        if (nums[m]) l = m + 1;
        else r = m;
    }
    return nums.length - r;
}
