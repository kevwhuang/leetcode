/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

module.exports = function findMedianSortedArrays(nums1, nums2) {
    const nums = nums1.concat(nums2).sort((a, b) => a - b);
    const median = Math.floor(nums.length / 2);
    return nums.length % 2 ? nums[median] : (nums[median - 1] + nums[median]) / 2;
};
