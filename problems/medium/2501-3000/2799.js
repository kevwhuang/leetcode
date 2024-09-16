// 2799 - Count Complete Subarrays in an Array

function countCompleteSubarrays(nums) {
    let subarrays = 0;
    const map = new Map();
    const tgt = new Set(nums).size, n = nums.length;
    for (let l = 0, r = 0; r < n; r++) {
        map.set(nums[r], (map.get(nums[r]) ?? 0) + 1);
        while (map.size === tgt) {
            subarrays += n - r;
            const nextFreq = map.get(nums[l]) - 1;
            if (nextFreq) map.set(nums[l++], nextFreq);
            else map.delete(nums[l++]);
        }
    }
    return subarrays;
}
