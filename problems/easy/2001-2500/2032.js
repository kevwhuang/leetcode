// 2032 - Two Out of Three

function twoOutOfThree(nums1, nums2, nums3) {
    const freq = new Array(100).fill(0);
    for (const nums of [nums1, nums2, nums3]) {
        for (const n of new Set(nums).keys()) {
            freq[n - 1]++;
        }
    }
    const distinct = [];
    for (let i = 0; i < 100; i++) {
        freq[i] >= 2 && distinct.push(i + 1);
    }
    return distinct;
}
