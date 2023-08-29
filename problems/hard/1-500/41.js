// 41 - First Missing Positive

function firstMissingPositive(nums) {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0 || n < nums[i]) nums[i] = 1000001;
    }
    for (let i = 0; i < n; i++) {
        const num = Math.abs(nums[i]) - 1;
        if (num === 1000000) continue;
        nums[num] = -Math.abs(nums[num]);
    }
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) return i + 1;
    }
    return n + 1;
}
