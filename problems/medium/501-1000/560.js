// 560 - Subarray Sum Equals K

function subarraySum(nums, k) {
    let subarrays = 0, running = 0;
    const map = new Map([[0, 1]]);
    for (let i = 0; i < nums.length; i++) {
        running += nums[i];
        if (map.has(running - k)) subarrays += map.get(running - k);
        map.set(running, map.get(running) + 1 || 1);
    }
    return subarrays;
}
