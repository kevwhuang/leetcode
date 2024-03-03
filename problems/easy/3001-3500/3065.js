// 3065 - Minimum Operations to Exceed Threshold Value I

function minOperations(nums, k) {
    nums.sort((a, b) => a - b);
    let i = 0;
    while (nums[i] < k) i++;
    return i;
}
