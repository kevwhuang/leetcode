// 268 - Missing Number

/**
 * @param {number[]} nums
 * @return {number}
 */

function missingNumber(nums) {
    return nums.reduce((s, e, i) => s ^ e ^ i, nums.length);
}

module.exports = missingNumber;
