// 1413 - Minimum Value to Get Positive Step by Step Sum

function minStartValue(nums) {
    let min = Infinity;
    for (let sum = 0, i = 0; i < nums.length; i++) {
        sum += nums[i];
        min = Math.min(sum, min);
    }
    return min < 1 ? 1 - min : 1;
}
