// 496 - Next Greater Element I

function nextGreaterElement(nums1, nums2) {
    for (let i = 0; i < nums1.length; i++) {
        const pos = nums2.indexOf(nums1[i]);
        let greater = -1;
        for (let j = pos + 1; j < nums2.length; j++) {
            if (nums2[j] > nums1[i]) {
                greater = nums2[j];
                break;
            }
        }
        nums1[i] = greater;
    }
    return nums1;
}
