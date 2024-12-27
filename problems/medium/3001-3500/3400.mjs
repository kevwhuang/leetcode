// 3400 - Maximum Number of Matching Indices After Right Shifts

function maximumMatchingIndices(nums1, nums2) {
    let res = 0;
    const n = nums1.length;
    for (let i = 0; i < n; i++) {
        let acc = 0;
        for (let j = 0; j < n; j++) {
            if (nums1[j] === nums2[(i + j) % n]) acc++;
        }
        res = Math.max(acc, res);
    }
    return res;
}
