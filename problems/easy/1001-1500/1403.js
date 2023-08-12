// 1403 - Minimum Subsequence in Non-Increasing Order

function minSubsequence(nums) {
    nums.sort((a, b) => b - a);
    let i = 0;
    let leftSum = 0;
    let rightSum = nums.reduce((s, e) => s + e, 0);
    while (leftSum <= rightSum) {
        leftSum += nums[i];
        rightSum -= nums[i];
        i++;
    }
    return nums.slice(0, i);
}
