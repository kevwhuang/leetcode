// 3353 - Minimum Total Operations

function minOperations(nums) {
    let ops = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] !== nums[i]) ops++;
    }
    return ops;
}
