// 55 - Jump Game

/**
 * @param {number[]} nums
 * @return {boolean}
 */

function canJump(nums) {
    for (let max = 0, i = 0; i < nums.length; i++) {
        if (max < i) return false;
        max = Math.max(i + nums[i], max);
    }
    return true;
}

module.exports = canJump;
