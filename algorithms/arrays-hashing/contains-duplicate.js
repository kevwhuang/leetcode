// 217 - Contains Duplicate

/**
 * @param {number[]} nums
 * @return {boolean}
*/

function containsDuplicate(nums) {
    return new Set(nums).size !== nums.length;
}

module.exports = containsDuplicate;
