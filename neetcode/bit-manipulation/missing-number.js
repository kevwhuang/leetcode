// 268 - Missing Number

/**
 * @param {number[]} nums
 * @return {number}
 */

function missingNumber(nums) {
    let missing = nums.length;
    for (let i = 0; i < nums.length; i++) {
        missing ^= i ^ nums[i];
    }
    return missing;
}

module.exports = missingNumber;
