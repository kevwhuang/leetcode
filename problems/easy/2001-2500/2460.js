// 2460 - Apply Operations to an Array

function applyOperations(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== nums[i + 1]) continue;
        nums[i] *= 2;
        nums[i++ + 1] = 0;
    }
    return nums.sort((a, b) => !a - !b);
}
