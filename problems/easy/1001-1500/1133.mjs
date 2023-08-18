// 1133 - Largest Unique Number

function largestUniqueNumber(nums) {
    const all = new Set();
    const unique = new Set();
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (all.has(n)) {
            continue;
        } else {
            if (unique.has(n)) {
                all.add(n);
                unique.delete(n);
            } else {
                unique.add(n);
            }
        }
    }
    return !unique.size ? -1 : Math.max.apply(null, [...unique.values()]);
}
