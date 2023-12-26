// 88 - Merge Sorted Array

function merge(nums1, m, nums2, n) {
    let pt1 = m - 1, pt2 = n - 1;
    while (pt2 >= 0) {
        if (pt1 >= 0 && nums1[pt1] > nums2[pt2]) {
            nums1[pt1 + pt2 + 1] = nums1[pt1--];
        } else {
            nums1[pt1 + pt2 + 1] = nums2[pt2--];
        }
    }
}
