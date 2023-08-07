// 1748 - Sum of Unique Elements

function sumOfUnique(nums) {
    const freq = [];
    nums.forEach(e => freq[e] = freq[e] + 1 || 1);
    return freq.reduce((s, e, i) => e === 1 ? s + i : s, 0);
}
