// 1413 - Minimum Value to Get Positive Step by Step Sum

function minStartValue(nums) {
    let minPrefix = Infinity;
    for (let i = 0, sum = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum < minPrefix) minPrefix = sum;
    }
    return minPrefix < 1 ? 1 - minPrefix : 1;
}
