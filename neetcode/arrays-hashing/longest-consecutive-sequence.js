// 128 - Longest Consecutive Sequence

/**
 * @param {number[]} nums
 * @return {number}
 */

function longestConsecutive(nums) {
    if (nums.length === 0) return 0;
    nums = new Int32Array(nums).sort();
    let res = 1, acc = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] === nums[i]) continue;
        acc = nums[i - 1] + 1 === nums[i] ? acc + 1 : 1;
        res = Math.max(acc, res);
    }
    return res;
}

module.exports = longestConsecutive;
