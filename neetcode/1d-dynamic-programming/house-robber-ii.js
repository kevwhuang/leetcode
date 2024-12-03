// 213 - House Robber II

/**
 * @param {number[]} nums
 * @return {number}
 */

function rob(nums) {
    if (nums.length <= 3) return Math.max(...nums);
    let max, a = 0, b = 0, c = 0, d = 0;
    for (let i = 1; i < nums.length; i++) {
        max = Math.max(a + nums[i - 1], b);
        a = b, b = max;
        max = Math.max(c + nums[i], d);
        c = d, d = max;
    }
    return Math.max(b, d);
}

module.exports = rob;
