// 287 - Find the Duplicate Number

/**
 * @param {number[]} nums
 * @return {number}
 */

function findDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
        let n = Math.abs(nums[i]);
        if (nums[n] < 0) return n;
        nums[n] *= -1;
    }
}

module.exports = findDuplicate;
