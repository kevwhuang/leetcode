// 153 - Find Minimum in Rotated Sorted Array

/**
 * @param {number[]} nums
 * @return {number}
 */

function findMin(nums) {
    let l = 0, r = nums.length - 1;
    while (l < r) {
        const m = l + r >> 1;
        if (nums[m] > nums[r]) l = m + 1;
        else r = m;
    }
    return nums[l];
}

module.exports = findMin;
