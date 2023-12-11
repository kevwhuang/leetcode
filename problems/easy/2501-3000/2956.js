// 2956 - Find Common Elements Between Two Arrays

function findIntersectionValues(nums1, nums2) {
    const res = [0, 0];
    const nums1Vals = new Set(nums1);
    const nums2Vals = new Set();
    for (let i = 0; i < nums2.length; i++) {
        nums2Vals.add(nums2[i]);
        if (nums1Vals.has(nums2[i])) res[1]++;
    }
    for (let i = 0; i < nums1.length; i++) {
        if (nums2Vals.has(nums1[i])) res[0]++;
    }
    return res;
}
