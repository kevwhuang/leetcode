/**
 * @param {number[]} nums
 * @return {boolean}
 */

module.exports = function containsDuplicate(nums) {
    return new Set(nums).size !== nums.length;
};
