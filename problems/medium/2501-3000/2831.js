// 2831 - Find the Longest Equal Subarray

function longestEqualSubarray(nums, k) {
    let max = 1;
    const map = new Map();
    for (let l = 0, r = 0; r < nums.length; r++) {
        const freq = map.get(nums[r]) + 1 || 1;
        map.set(nums[r], freq);
        if (freq > max) max = freq;
        while (r - l - max >= k) {
            map.set(nums[l], map.get(nums[l++]) - 1);
        }
    }
    return max;
}
