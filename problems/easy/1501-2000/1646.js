// 1646 - Get Maximum in Generated Array

function getMaximumGenerated(n) {
    if (n === 0) return 0;
    const nums = [0, 1];
    let max = 1, i = 0;
    while (++i) {
        if (--n === 0) break;
        max = Math.max(nums[2 * i] = nums[i], max);
        if (--n === 0) break;
        max = Math.max(nums[2 * i + 1] = nums[i] + nums[i + 1], max);
    }
    return max;
}
