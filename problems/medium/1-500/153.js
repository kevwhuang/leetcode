// 153 - Find Minimum in Rotated Sorted Array

function findMin(nums) {
    let l = 0, r = nums.length - 1, m;
    while (l < r) {
        m = ~~((l + r) / 2);
        nums[m] > nums[r] ? l = m + 1 : r = m;
    }
    return nums[l];
}
