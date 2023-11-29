// 55 - Jump Game

/**
 * @param {number[]} nums
 * @return {boolean}
 */

function canJump(nums) {
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (max < i) return false;
        max = Math.max(i + nums[i], max);
    }
    return true;
}

module.exports = canJump;
