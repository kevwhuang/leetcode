// 3038 - Maximum Number of Operations With the Same Score I

function maxOperations(nums) {
    let i = 2;
    const target = nums[0] + nums[1];
    while (nums[i] + nums[i + 1] === target) i += 2;
    return i / 2;
}
