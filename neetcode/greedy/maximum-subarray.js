// 53 - Maximum Subarray

/**
 * @param {number[]} nums
 * @return {number}
 */

function maxSubArray(nums) {
    let running = 0, max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        running = Math.max(nums[i] + running, nums[i]);
        max = Math.max(running, max);
    }
    return max;
}

module.exports = maxSubArray;
