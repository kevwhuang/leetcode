// 2529 - Maximum Count of Positive Integer and Negative Integer

function maximumCount(nums) {
    function binarySearch(nums, target) {
        let l = 0, r = nums.length - 1;
        while (l <= r) {
            const m = ~~((l + r) / 2);
            if (nums[m] < target) l = m + 1;
            else if (nums[m] > target) r = m - 1;
        }
        return l;
    }
    const lower = binarySearch(nums, -.1);
    const upper = binarySearch(nums, .1);
    return Math.max(lower, nums.length - upper);
}
