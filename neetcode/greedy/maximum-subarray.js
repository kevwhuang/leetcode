// 53 - Maximum Subarray

/**
 * @param {number[]} nums
 * @return {number}
 */

function maxSubArray(nums) {
    let res = -Infinity, acc = 0, i = -1;
    while (++i < nums.length) {
        acc = Math.max(nums[i], acc + nums[i]);
        res = Math.max(acc, res);
    }
    return res;
}

module.exports = maxSubArray;
