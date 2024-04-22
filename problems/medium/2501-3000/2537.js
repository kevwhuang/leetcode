// 2537 - Count the Number of Good Subarrays

function countGood(nums, k) {
    let subarrays = 0, pairs = 0;
    const map = new Map();
    for (let l = 0, r = 0; r < nums.length; r++) {
        if (map.has(nums[r])) {
            const freq = map.get(nums[r]);
            map.set(nums[r], freq + 1);
            pairs += freq;
        } else {
            map.set(nums[r], 1);
        }
        while (pairs >= k) {
            const nextFreq = map.get(nums[l]) - 1;
            map.set(nums[l++], nextFreq);
            pairs -= nextFreq;
            subarrays += nums.length - r;
        }
    }
    return subarrays;
}
