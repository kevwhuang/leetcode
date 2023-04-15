/**
 * @param {number[]} nums
 * @return {number}
 */

module.exports = function missingNumber(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i <= nums.length; i++) {
        if (i !== nums[i]) return i;
    }
};
