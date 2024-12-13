// 53 - Maximum Subarray

function maxSubArray(nums) {
    let res = -Infinity, acc = 0;
    for (let i = 0; i < nums.length; i++) {
        acc = Math.max(nums[i], acc + nums[i]);
        res = Math.max(acc, res);
    }
    return res;
}
