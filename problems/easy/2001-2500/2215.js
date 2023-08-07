// 2215 - Find the Difference of Two Arrays

function findDifference(nums1, nums2) {
    const list = [[], []];
    nums1 = new Set(nums1);
    nums2 = new Set(nums2);
    for (const num of nums1.keys()) {
        !nums2.has(num) && list[0].push(num);
    }
    for (const num of nums2.keys()) {
        !nums1.has(num) && list[1].push(num);
    }
    return list;
}
