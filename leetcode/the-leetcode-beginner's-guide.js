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

// 1672 - Richest Customer Wealth
function maximumWealth(accounts) {
    let max = 0;
    for (const customer of accounts) {
        max = Math.max(customer.reduce((s, i) => s + i, 0), max);
    }
    return max;
}
