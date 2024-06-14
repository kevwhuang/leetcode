// 2541 - Minimum Operations to Make Array Equal II

function minOperations(nums1, nums2, k) {
    let plus = 0, minus = 0;
    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] === nums2[i]) continue;
        const ops = Math.abs(nums1[i] - nums2[i]) / k;
        if (!Number.isInteger(ops)) return -1;
        if (nums1[i] > nums2[i]) minus -= ops;
        else plus += ops, minus += ops;
    }
    return minus ? -1 : plus;
}
