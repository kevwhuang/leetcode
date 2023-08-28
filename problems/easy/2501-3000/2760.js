// 2760 - Longest Even Odd Subarray With Threshold

function longestAlternatingSubarray(nums, threshold) {
    const length = nums.length;
    let max = 0;
    for (let i = 0, len; i < length; i++) {
        if (max >= length - i) return max;
        if (nums[i] % 2) continue;
        len = 0;
        for (let j = i; j < length; j++, len++) {
            if (nums[j] % 2 !== len % 2 || nums[j] > threshold) break;
        }
        max = Math.max(len, max);
        i += Math.max(0, len - 1);
    }
    return max;
}
