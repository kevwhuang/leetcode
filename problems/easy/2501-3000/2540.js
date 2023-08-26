// 2540 - Minimum Common Value

function getCommon(nums1, nums2) {
    let p1 = 0;
    let p2 = 0;
    while (p1 < nums1.length && p2 < nums2.length) {
        if (nums1[p1] < nums2[p2]) p1++;
        else if (nums1[p1] > nums2[p2]) p2++;
        else return nums1[p1];
    }
    return -1;
}
