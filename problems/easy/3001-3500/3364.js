// 3364 - Minimum Positive Sum Subarray

function minimumSumSubarray(nums, l, r) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }
    let min = Infinity;
    const lim1 = nums.length - l + 1;
    for (let i = 0; i < lim1; i++) {
        const lim2 = Math.min(i + r, nums.length);
        for (let j = i + l - 1; j < lim2; j++) {
            const sum = nums[j] - (i && nums[i - 1]);
            if (sum > 0) min = Math.min(sum, min);
        }
    }
    return min === Infinity ? -1 : min;
}
