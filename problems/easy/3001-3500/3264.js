// 3264 - Final Array State After K Multiplication Operations I

function getFinalState(nums, k, multiplier) {
    while (k--) {
        let min = Infinity, minIdx;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] >= min) continue;
            min = nums[i], minIdx = i;
        }
        nums[minIdx] *= multiplier;
    }
    return nums;
}
