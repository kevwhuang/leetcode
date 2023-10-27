// 2799 - Count Complete Subarrays in an Array

function countCompleteSubarrays(nums) {
    const len = nums.length, target = new Set(nums).size;
    const freqs = new Map();
    let subarrays = l = 0;
    for (let r = 0; r < len; r++) {
        freqs.set(nums[r], (freqs.get(nums[r]) || 0) + 1);
        while (freqs.size === target) {
            subarrays += len - r;
            const freq = freqs.get(nums[l]);
            if (freq === 1) freqs.delete(nums[l++]);
            else freqs.set(nums[l++], freq - 1);
        }
    }
    return subarrays;
}
