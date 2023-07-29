/**
 * @param {number[]} nums
 * @return {number}
 */

module.exports = longestConsecutive;

function longestConsecutive(nums) {
    if (!nums.length) return 0;
    let max = 1;
    let tally = 1;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) continue;
        nums[i] + 1 === nums[i + 1] ? tally++ : tally = 1;
        if (tally > max) max = tally;
    }
    return max;
}
