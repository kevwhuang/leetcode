// 287 - Find the Duplicate Number

/**
 * @param {number[]} nums
 * @return {number}
 */

function findDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
        const abs = Math.abs(nums[i]);
        if (nums[abs] < 0) return abs;
        nums[abs] *= -1;
    }
}

module.exports = findDuplicate;
