// 4 - Median of Two Sorted Arrays

function findMedianSortedArrays(nums1, nums2) {
    const nums = nums1.concat(nums2).sort((a, b) => a - b);
    const med = Math.floor(nums.length / 2);
    return nums.length % 2 ? nums[med] : (nums[med - 1] + nums[med]) / 2;
}
