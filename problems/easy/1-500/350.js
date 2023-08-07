// 350 - Intersection of Two Arrays II

function intersect(nums1, nums2) {
    const freq = {};
    for (let i = 0; i < nums1.length; i++) {
        freq[nums1[i]] = (freq[nums1[i]] + 1) || 1;
    }
    const output = [];
    for (let i = 0; i < nums2.length; i++) {
        const num = nums2[i];
        freq[num] > 0 && freq[num]-- && output.push(num);
    }
    return output;
}
