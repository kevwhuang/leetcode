/**
 * @param {number[]} nums
 * @return {boolean}
 */

module.exports = containsDuplicate;

function containsDuplicate(nums) {
    return new Set(nums).size !== nums.length;
}
