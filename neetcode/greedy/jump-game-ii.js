// 45 - Jump Game II

/**
 * @param {number[]} nums
 * @return {number}
 */

function jump(nums) {
    let res = 0, max = 0, i = 0, j = 0;
    const lim = nums.length - 1;
    while (i < lim) {
        max = Math.max(i + nums[i], max);
        if (i++ === j) res++, j = max;
    }
    return res;
}

module.exports = jump;
