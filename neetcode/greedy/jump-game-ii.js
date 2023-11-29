// 45 - Jump Game II

/**
 * @param {number[]} nums
 * @return {number}
 */

function jump(nums) {
    let jumps = 0, max = 0, pos = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        max = Math.max(i + nums[i], max);
        if (i === pos) {
            jumps++;
            pos = max;
        }
    }
    return jumps;
}

module.exports = jump;
