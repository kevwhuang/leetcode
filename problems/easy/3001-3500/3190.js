// 3190 - Find Minimum Operations to Make All Elements Divisible by Three

function minimumOperations(nums) {
    let ops = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 3) ops++;
    }
    return ops;
}
