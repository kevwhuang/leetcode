// 198 - House Robber

/**
 * @param {number[]} nums
 * @return {number}
 */

function rob(nums) {
    let a = 0, b = 0, i = -1;
    while (++i < nums.length) {
        const max = Math.max(a + nums[i], b);
        a = b, b = max;
    }
    return b;
}

module.exports = rob;
