// 349 - Intersection of Two Arrays

function intersection(nums1, nums2) {
    const set = new Set();
    for (let i = 0; i < nums1.length; i++) {
        set.add(nums1[i]);
    }
    const output = [];
    for (let i = 0; i < nums2.length; i++) {
        const num = nums2[i];
        set.has(num) && set.delete(num) && output.push(num);
    }
    return output;
}
