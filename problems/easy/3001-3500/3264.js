// 3264 - Final Array State After K Multiplication Operations I

function getFinalState(nums, k, multiplier) {
    while (k--) {
        let min;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < (nums[min] ?? Infinity)) min = i;
        }
        nums[min] *= multiplier;
    }
    return nums;
}
