// 961 - N-Repeated Element in Size 2N Array

function repeatedNTimes(nums) {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) return nums[i];
        set.add(nums[i]);
    }
}
