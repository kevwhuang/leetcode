// 1150 - Check If a Number Is Majority Element in a Sorted Array

function isMajorityElement(nums, target) {
    if (nums.length === 1) return nums[0] === target;
    return 1 + nums.lastIndexOf(target) - nums.indexOf(target) > nums.length / 2;
}
