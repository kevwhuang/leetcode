// 3347 - Maximum Frequency of an Element After Performing Operations II

function maxFrequency(nums, k, numOperations) {
    nums = new Uint32Array(nums).sort();
    let max = 1, l = 0, m = 0, r = 0, n = nums.length;
    while (m < n) {
        let f = numOperations, num = nums[m];
        while (m < n && nums[m] === num) f++, m++;
        while (l < m && nums[l] < num - k) l++;
        r = Math.max(m, r);
        while (r < n && nums[r] <= num + k) r++;
        max = Math.max(Math.min(f, r - l), max);
    }
    l = -1, r = 0;
    while (++l < n - max) {
        while (nums[l] + k + k >= nums[r]) r++;
        max = Math.max(Math.min(numOperations, r - l), max);
    }
    return max;
}
