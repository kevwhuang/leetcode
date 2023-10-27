// 2863 - Maximum Length of Semi-Decreasing Subarrays

function maxSubarrayLength(nums) {
    let longest = 0;
    for (let i = 0, bound = nums.length - 1; i < bound; i++) {
        const num = nums[i];
        for (let j = bound; j >= i + 1; j--) {
            if (nums[j] >= num) continue;
            longest = Math.max(j - i + 1, longest);
            break;
        }
    }
    return longest;
}
