/**
 * @param {number[]} nums
 * @return {number}
 */

module.exports = function lengthOfLIS(nums) {
    const map = new Array(nums.length).fill(1);
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) map[i] = Math.max(map[i], map[j] + 1);
        }
    }
    return Math.max.apply(null, map);
};
