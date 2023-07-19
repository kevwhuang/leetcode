// 2235 - Add Two Integers
function sum(num1, num2) {
    return num1 + num2;
}

// 1480 - Running Sum of 1d Array
function runningSum(nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }
    return nums;
}
