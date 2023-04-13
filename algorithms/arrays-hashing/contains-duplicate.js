/**
 * @param {number[]} nums
 * @return {boolean}
 */

module.exports = function containsDuplicate(nums) {
    nums.sort();
    for (let i = 0; i < nums.length; i++) if (nums[i] === nums[i + 1]) return true;
    return false;
};
