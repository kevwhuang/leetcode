// 2855 - Minimum Right Shifts to Sort the Array

function minimumRightShifts(nums) {
    let shifted = false, pivot = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] <= nums[i]) continue;
        if (shifted) return -1;
        shifted = true;
        pivot = i;
    }
    if (shifted) return nums.at(0) < nums.at(-1) ? -1 : nums.length - pivot;
    return 0;
}
