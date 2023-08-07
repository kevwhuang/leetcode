// 217 - Contains Duplicate

/**
 * @param {number[]} nums
 * @return {boolean}
 */

function containsDuplicate(nums) {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) return true;
        set.add(nums[i]);
    }
    return false;
}

module.exports = containsDuplicate;
