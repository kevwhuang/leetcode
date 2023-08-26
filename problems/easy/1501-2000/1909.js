// 1909 - Remove One Element to Make the Array Strictly Increasing

function canBeIncreasing(nums) {
    for (let i = 1, hasDecreased = false; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            if (hasDecreased) return false;
            hasDecreased = true;
            if (nums[i] <= nums[i - 2]) nums[i] = nums[i - 1];
        }
    }
    return true;
}
