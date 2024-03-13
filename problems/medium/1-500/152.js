// 152 - Maximum Product Subarray

function maxProduct(nums) {
    let res = nums[0], max = nums[0], min = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            const temp = max;
            max = min;
            min = temp;
        }
        max = Math.max(nums[i], nums[i] * max);
        min = Math.min(nums[i], nums[i] * min);
        res = Math.max(max, res);
    }
    return res;
}
