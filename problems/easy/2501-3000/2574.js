// 2574 - Left and Right Sum Differences

function leftRightDifference(nums) {
    let leftSum = 0;
    let rightSum = nums.reduce((s, num) => s + num, 0);
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        rightSum -= current;
        nums[i] = Math.abs(leftSum - rightSum);
        leftSum += current;
    }
    return nums;
}
