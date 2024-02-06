// 3010 - Divide an Array Into Subarrays With Minimum Cost I

function minimumCost(nums) {
    const first = nums.shift();
    nums.sort((a, b) => a - b);
    return first + nums[0] + nums[1];
}
