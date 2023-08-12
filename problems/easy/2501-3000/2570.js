// 2570 - Merge Two 2D Arrays by Summing Values

function mergeArrays(nums1, nums2) {
    const res = [];
    let p1 = 0;
    let p2 = 0;
    while (p1 < nums1.length || p2 < nums2.length) {
        const e1 = nums1[p1] || [Infinity];
        const e2 = nums2[p2] || [Infinity];
        if (e1[0] === e2[0]) {
            res.push([e1[0], e1[1] + e2[1]]);
            p1++;
            p2++;
        } else if (e1[0] < e2[0]) {
            res.push(e1);
            p1++;
        } else {
            res.push(e2);
            p2++;
        }
    }
    return res;
}
