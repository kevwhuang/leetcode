// 53 - Maximum Subarray

/**
 * @param {number[]} nums
 * @return {number}
 */

function maxSubArray(nums) {
    let max = -Infinity, running = 0;
    for (let i = 0; i < nums.length; i++) {
        running = Math.max(nums[i], nums[i] + running);
        max = Math.max(running, max);
    }
    return max;
}

module.exports = maxSubArray;
