// 1748 - Sum of Unique Elements

function sumOfUnique(nums) {
    const bucket = [];
    nums.forEach(e => bucket[e] = bucket[e] + 1 || 1);
    return bucket.reduce((s, e, i) => e === 1 ? s + i : s, 0);
}
