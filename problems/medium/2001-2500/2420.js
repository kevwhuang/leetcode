// 2420 - Find All Good Indices

function goodIndices(nums, k) {
    const n = nums.length;
    const prefix = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        if (nums[i - 1] >= nums[i]) prefix[i] = prefix[i - 1] + 1;
    }
    const suffix = new Array(n).fill(1);
    for (let i = n - 2; ~i; i--) {
        if (nums[i] <= nums[i + 1]) suffix[i] = suffix[i + 1] + 1;
    }
    const indices = [], lim = n - k;
    for (let i = k; i < lim; i++) {
        if (prefix[i - 1] >= k && suffix[i + 1] >= k) indices.push(i);
    }
    return indices;
}
