// 1005 - Maximize Sum of Array After K Negations

function largestSumAfterKNegations(nums, k) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length && k > 0; i++, k--) {
        if (nums[i] >= 0) break;
        nums[i] *= -1;
    }
    let sum = 0, min = Infinity;
    for (let i = 0, cur; i < nums.length; i++) {
        cur = nums[i];
        min = Math.min(cur, min);
        sum += cur;
    }
    return k % 2 ? sum - 2 * min : sum;
}
