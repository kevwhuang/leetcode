/**
 * @param {number[]} nums
 * @return {number}
 */

module.exports = function findMin(nums) {
    return nums.sort((a, b) => a - b)[0];
};
