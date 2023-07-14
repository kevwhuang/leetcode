/**
 * @param {number[]} nums
 * @return {number}
 */

module.exports = function longestConsecutive(nums) {
    const L = nums.length;
    let max = 1;
    let tally = 1;
    if (!L) return 0;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < L; i++) {
        if (nums[i] === nums[i + 1]) continue;
        nums[i] + 1 === nums[i + 1] ? tally++ : tally = 1;
        if (tally > max) max = tally;
    }
    return max;
};
