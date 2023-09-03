// 128 - Longest Consecutive Sequence

/**
 * @param {number[]} nums
 * @return {number}
 */

function longestConsecutive(nums) {
    if (!nums.length) return 0;
    nums.sort((a, b) => a - b);
    let max = 1, tally = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) continue;
        nums[i] + 1 === nums[i + 1] ? tally++ : tally = 1;
        max = Math.max(tally, max);
    }
    return max;
}

module.exports = longestConsecutive;
