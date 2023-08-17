// 153 - Find Minimum in Rotated Sorted Array

/**
 * @param {number[]} nums
 * @return {number}
 */

function findMin(nums) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        const m = ~~((l + r) / 2);
        nums[m] > nums[r] ? l = m + 1 : r = m;
    }
    return nums[l];
}

module.exports = findMin;
