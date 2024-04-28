// 3132 - Find the Integer Added to Array II

function minimumAddedInteger(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let min = Infinity;
    for (let i = 0; i < nums1.length - 1; i++) {
        L: for (let j = i + 1; j < nums1.length; j++) {
            let target;
            for (let k1 = 0, k2 = 0; k1 < nums1.length; k1++) {
                if (k1 === i || k1 === j) continue;
                const diff = nums2[k2++] - nums1[k1];
                if (diff >= min) continue L;
                target ??= diff;
                if (diff !== target) continue L;
            }
            min = Math.min(target, min);
        }
    }
    return min;
}
