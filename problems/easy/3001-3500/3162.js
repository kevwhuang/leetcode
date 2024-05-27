// 3162 - Find the Number of Good Pairs I

function numberOfPairs(nums1, nums2, k) {
    let pairs = 0;
    for (let i = 0; i < nums1.length; i++) {
        const num = nums1[i];
        for (let j = 0; j < nums2.length; j++) {
            if (num % (nums2[j] * k)) continue;
            pairs++;
        }
    }
    return pairs;
}
