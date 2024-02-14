// 2789 - Largest Element in an Array After Merge Operations

function maxArrayValue(nums) {
    let max = 1, i = nums.length - 1;
    while (i >= 0) {
        let sum = nums[i];
        while (i - 1 >= 0 && nums[i - 1] <= sum) sum += nums[i-- - 1];
        if (sum === nums[i]) i--;
        max = Math.max(sum, max);
    }
    return max;
}
