/**
 * @param {number[]} nums
 * @return {boolean}
 */

module.exports = function containsDuplicate(nums) {
    const LEN = nums.length;
    nums.sort();
    for (let i = 0; i < LEN; i++) if (nums[i] === nums[i + 1]) return true;
    return false;
}
