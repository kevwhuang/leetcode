// 136 - Single Number

/**
 * @param {number[]} nums
 * @return {number}
 */

function singleNumber(nums) {
    let unique = 0;
    for (let i = 0; i < nums.length; i++) {
        unique ^= nums[i];
    }
    return unique;
}

module.exports = singleNumber;
