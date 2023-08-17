/**
 * @param {number[]} nums
 * @return {number}
 */

module.exports = function singleNumber(nums) {
    let unique;
    for (let i = 0; i < nums.length; i++) unique ^= nums[i];
    return unique;
};
