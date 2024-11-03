// 4 - Median of Two Sorted Arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

function findMedianSortedArrays(nums1, nums2) {
    const nums = nums1.concat(nums2).sort((a, b) => a - b);
    const idx = nums.length >> 1;
    return nums.length % 2 ? nums[idx] : (nums[idx - 1] + nums[idx]) / 2;
}

module.exports = findMedianSortedArrays;
