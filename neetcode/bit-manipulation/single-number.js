// 136 - Single Number

/**
 * @param {number[]} nums
 * @return {number}
 */

function singleNumber(nums) {
    return nums.reduce((s, e) => s ^ e);
}

module.exports = singleNumber;
