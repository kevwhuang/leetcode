// 2656 - Maximum Sum With Exactly K Elements

function maximizeSum(nums, k) {
    const num = Math.max.apply(null, nums);
    return (num + (num + k - 1)) * k / 2;
}
